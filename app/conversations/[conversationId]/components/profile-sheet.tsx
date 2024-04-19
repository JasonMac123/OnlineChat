"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import { Menu } from "lucide-react";
import { Conversation, User } from "@prisma/client";

import useOtherUser from "@/app/hooks/useOtherUser";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface ProfileSheetProps {
  data: Conversation & {
    users: User[];
  };
}

export const ProfileSheet = ({ data }: ProfileSheetProps) => {
  const otherUser = useOtherUser(data);

  const joinedDate = useMemo(() => {
    return format(new Date(otherUser.createdAt), "PP");
  }, [otherUser.createdAt]);

  const title = useMemo(() => {
    return data.name || otherUser.name;
  }, [data.name, otherUser.name]);

  const statusText = useMemo(() => {
    if (data.isGroup) {
      return `${data.users.length} members`;
    }

    return "Active";
  }, [data]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={20} className="text-sky-400 hover:text-sky-600 cursor-pointer transition" />
      </SheetTrigger>
      <SheetContent side={"right"} className="w-full lg:w-1/3 xl:w-1/6">
        <SheetTitle>{title}</SheetTitle>
      </SheetContent>
    </Sheet>
  );
};

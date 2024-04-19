"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import { Menu } from "lucide-react";
import { Conversation, User } from "@prisma/client";

import useOtherUser from "@/app/hooks/useOtherUser";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserAvatar } from "@/components/user-avatar";

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
      <SheetContent side={"right"} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6">
        <SheetHeader>
          <div className="flex flex-col items-center justify-center space-y-2">
            <UserAvatar user={otherUser} />
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{statusText}</SheetDescription>
          </div>
        </SheetHeader>
        <div className="space-y-4">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Email</p>
            <p className="text-sm mt-1 text-gray-900">{otherUser.email}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Join Date</p>
            <p className="text-sm mt-1 text-gray-900">{joinedDate}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

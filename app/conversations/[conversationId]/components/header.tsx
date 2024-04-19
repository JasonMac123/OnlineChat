"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";
import { ArrowLeft } from "lucide-react";

import useOtherUser from "@/app/hooks/useOtherUser";

import { UserAvatar } from "@/components/user-avatar";
import { ProfileSheet } from "./profile-sheet";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

export const Header = ({ conversation }: HeaderProps) => {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return "Active";
  }, [conversation]);

  return (
    <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link
          href={"/conversations"}
          className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
        >
          <ArrowLeft />
        </Link>
        <UserAvatar user={otherUser} />
        <div className="flex flex-col">
          <div>{conversation.name || otherUser.name}</div>
          <div className="text-sm font-light text-neutral-500">{statusText}</div>
        </div>
      </div>
      <ProfileSheet data={conversation} />
    </div>
  );
};

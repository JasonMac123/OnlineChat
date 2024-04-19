"use client";

import { Conversation, User } from "@prisma/client";

import { Menu } from "lucide-react";

interface ProfileSheetProps {
  data: Conversation & {
    users: User[];
  };
}

export const ProfileSheet = ({ data }: ProfileSheetProps) => {
  return (
    <div></div>
  );
};

"use client";

import { User } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface UserAvatarProps {
  user: User | null;
}

export const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src={user?.image || "/images/placeholder.png"} />
        <AvatarFallback />
      </Avatar>
    </div>
  );
};

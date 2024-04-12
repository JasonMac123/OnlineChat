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
      <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
    </div>
  );
};

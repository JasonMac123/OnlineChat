"use client";

import Image from "next/image";

import { User } from "@prisma/client";

interface GroupAvatarProps {
  users: User[];
}

export const GroupAvatar = ({ users }: GroupAvatarProps) => {
  const slicedUsers = users.slice(0, 3);

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  return (
    <div className="relative h-12 w-12">
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${positionMap[index]}`}
        >
          <Image alt="Avatar" fill src={user.image || "/images/placeholder.png"} />
        </div>
      ))}
    </div>
  );
};

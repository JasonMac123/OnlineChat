"use client";

import { useSession } from "next-auth/react";

import { FullMessageType } from "@/app/types";
import { cn } from "@/lib/utils";

import { UserAvatar } from "@/components/user-avatar";
import { format } from "date-fns";
import Image from "next/image";

interface MessageLineProps {
  data: FullMessageType;
  isLast?: boolean;
}

export const MessageLine = ({ data, isLast }: MessageLineProps) => {
  const session = useSession();

  const isOwn = session?.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  return (
    <div className={cn("flex gap-3 p-4", isOwn && "justify-end")}>
      <div className={cn("", isOwn && "order-2")}>
        <UserAvatar user={data.sender} />
      </div>
      <div className={cn("flex flex-col gap-2", isOwn && "items-end")}>
        <div className="flex items-center gap-1">
          <p className="text-sm text-gray-500">{data.sender.name}</p>
          <p className="text-sm text-gray-500">{format(new Date(data.createdAt), "p")}</p>
        </div>
      </div>
      <div
        className={cn(
          "text-sm w-fit overflow-hidden",
          (isOwn ? "bg-sky-500 text-white" : "bg-gray-100") &&
            (data.image ? "rounded-md p-0" : "rounded-full py-2 px-3")
        )}
      >
        {data.image ? (
          <Image
            alt="Image"
            height={288}
            width={288}
            src={data.image}
            className="object-cover cursor-pointer hover:scale-110 transition translate"
          />
        ) : (
          <p>{data.body}</p>
        )}
      </div>
      {isLast && isOwn && seenList.length > 0 && (
        <p className="text-xs font-light text-gray-500">{`Seen by ${seenList}`}</p>
      )}
    </div>
  );
};

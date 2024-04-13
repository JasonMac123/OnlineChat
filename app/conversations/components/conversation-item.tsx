"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useSession } from "next-auth/react";

import { Conversation, Message, User } from "@prisma/client";
import { cn } from "@/lib/utils";

import { FullConversationType } from "@/app/types";

interface ConversationItemProps {
  data: FullConversationType;
  selected?: boolean;
}

export const ConversationItem = ({ data, selected }: ConversationItemProps) => {
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  return <div onClick={handleClick}></div>;
};

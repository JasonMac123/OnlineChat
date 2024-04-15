"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageSquarePlus } from "lucide-react";

import { cn } from "@/lib/utils";
import useConversation from "@/app/hooks/useConversation";

import { FullConversationType } from "@/app/types";
import { ConversationItem } from "./conversation-item";

interface ConversationListProps {
  items: FullConversationType[];
}

export const ConversationList = ({ items }: ConversationListProps) => {
  const [list, setList] = useState(items);
  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  return (
    <aside
      className={cn(
        "fixedd inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200",
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-neutral-800">Messages</div>
          <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
            <MessageSquarePlus size={24} />
          </div>
        </div>
        {items.map((chat) => (
          <ConversationItem key={chat.id} data={chat} selected={conversationId === chat.id} />
        ))}
      </div>
    </aside>
  );
};
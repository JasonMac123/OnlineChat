"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { find } from "lodash";

import { User } from "@prisma/client";

import { cn } from "@/lib/utils";
import { pusherClient } from "@/lib/pusher";
import useConversation from "@/app/hooks/useConversation";

import { FullConversationType } from "@/app/types";

import { ConversationItem } from "./conversation-item";
import { GroupConversationModal } from "./group-conversation-modal";

interface ConversationListProps {
  items: FullConversationType[];
  users: User[];
}

export const ConversationList = ({ items, users }: ConversationListProps) => {
  const [list, setList] = useState(items);
  const session = useSession();
  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  const pusherKey = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  useEffect(() => {
    if (!pusherKey) {
      return;
    }

    const newHandler = (conversation: FullConversationType) => {
      setList((current) => {
        if (find(current, { id: conversation.id })) {
          return current;
        }

        return [conversation, ...current];
      });
    };

    pusherClient.subscribe(pusherKey);
    pusherClient.bind("conversation:new", newHandler);

    return () => {
      pusherClient.unsubscribe(pusherKey);
      pusherClient.unbind("conversation:new", newHandler);
    };
  }, [pusherKey]);

  return (
    <aside
      className={cn(
        "fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200",
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-neutral-800">Messages</div>
          <GroupConversationModal users={users} />
        </div>
        {list.map((chat) => (
          <ConversationItem key={chat.id} data={chat} selected={conversationId === chat.id} />
        ))}
      </div>
    </aside>
  );
};

"use client";

import { Conversation } from "@prisma/client";

interface ConversationListProps {
  items: Conversation[];
}

export const ConversationList = ({ items }: ConversationListProps) => {
  return <div></div>;
};

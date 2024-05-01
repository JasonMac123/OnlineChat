"use client";

import useConversation from "../hooks/useConversation";
import { cn } from "@/lib/utils";

import { EmptyState } from "@/components/empty-state";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div className={cn("lg:pl-80 h-full lg:bock", isOpen ? "block" : "hidden")}>
      <EmptyState />
    </div>
  );
};

export default Home;

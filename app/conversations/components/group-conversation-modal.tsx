"use client";

import { MessageSquarePlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const GroupConversationModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
          <MessageSquarePlus size={24} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create a group chat!</DialogTitle>
        <DialogDescription>Invite multiple users to a group chat!</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

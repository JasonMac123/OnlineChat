"use client";

import { useCallback, useState } from "react";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

import useConversation from "@/app/hooks/useConversation";

import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ConfirmModal = () => {
  const router = useRouter();
  const { conversationId } = useConversation();

  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = useCallback(() => {
    setIsLoading(true);

    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        router.push("/conversations");
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false));
  }, [conversationId, router]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col space-y-2 cursor-pointer items-center justify-center mt-40">
          <div className="p-4 bg-neutral-200 rounded-full">
            <Trash size={20} />
          </div>
          <p className="text-sm font-light text-neutral-900">Delete</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <DialogDescription className="py-4">
          This action cannot be undone. This will permananly delete your conversation and all your
          messages with this user.
        </DialogDescription>
        <DialogFooter className="gap-4">
          <DialogClose asChild>
            <Button type="button" variant={"secondary"} className="w-full" disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>
          <DialogTrigger>
            <Button className="w-full" onClick={handleConfirm} disabled={isLoading}>
              Confirm
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

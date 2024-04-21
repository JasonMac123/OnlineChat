"use client";

import { Trash } from "lucide-react";

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
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-4 bg-neutral-200 rounded-full">
          <Trash size={20} />
        </div>
        <p className="text-sm font-light text-neutral-900">Delete</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          This action cannot be undone. This will permananly delete your conversation and all your
          messages with this user.
        </DialogDescription>
      </DialogContent>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant={"secondary"}>
            Cancel
          </Button>
        </DialogClose>
        <Button>Confirm</Button>
      </DialogFooter>
    </Dialog>
  );
};

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
            <Button type="button" variant={"secondary"} className="w-full">
              Cancel
            </Button>
          </DialogClose>
          <Button className="w-full">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

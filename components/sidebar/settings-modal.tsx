"use client";

import axios from "axios";

import { User } from "@prisma/client";

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
import { UserAvatar } from "../user-avatar";

interface SettingsModalProps {
  currentUser: User | null;
}

export const SettingsModal = ({ currentUser }: SettingsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div className="cursor-pointer hover:opacity-75 transition">
            <UserAvatar user={currentUser} />
          </div>
        </nav>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Your Profile</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

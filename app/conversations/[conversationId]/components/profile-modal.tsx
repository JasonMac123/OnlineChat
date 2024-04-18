"use client";

import { Conversation, User } from "@prisma/client";

interface ProfileModalProps {
  data: Conversation & {
    users: User[];
  };
  onClose: () => void;
}

export const ProfileModal = ({ data, onClose }: ProfileModalProps) => {
  return <div></div>;
};

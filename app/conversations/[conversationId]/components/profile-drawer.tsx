"use client";

import { Conversation, User } from "@prisma/client";

import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface ProfileDrawerProps {
  data: Conversation & {
    users: User[];
  };
}

export const ProfileDrawer = ({ data }: ProfileDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Menu size={36} className="text-sky-500 cursor-pointer hover:text-sky-600 transition" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>{data.name}</DrawerTitle>
      </DrawerContent>
    </Drawer>
  );
};

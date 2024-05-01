"use client";

import { User } from "@prisma/client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";

import { MobileFooterItem } from "./mobile-footer-item";

interface MobileSidebarProps {
  currentUser: User | null;
}

export const MobileFooter = ({ currentUser }: MobileSidebarProps) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((route) => (
        <MobileFooterItem
          key={route.label}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

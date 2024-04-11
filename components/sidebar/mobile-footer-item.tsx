"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface MobileFooterItemProps {
  href: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

export const MobileFooterItem = ({ href, icon: Icon, active, onClick }: MobileFooterItemProps) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={cn(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100`,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

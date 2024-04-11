"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface DesktopSideBarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

export const DesktopSideBarItem = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}: DesktopSideBarItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={cn(
          `group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100`,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

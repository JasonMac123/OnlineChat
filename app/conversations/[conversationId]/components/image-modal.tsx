"use client";

import React from "react";
import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageModalProps {
  children: React.ReactNode;
  src: string;
}

export const ImageModal = ({ children, src }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="w-2/3 h-1/2">
          <Image alt="Picture" src={src} sizes="100vw" fill style={{ objectFit: "contain" }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

"use client";

import { ClipLoader } from "react-spinners";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

interface LoadingModalProps {
  open: boolean;
}

export const LoadingModal = ({ open }: LoadingModalProps) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <ClipLoader />
      </DialogContent>
    </Dialog>
  );
};

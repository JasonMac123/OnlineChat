"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

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
import { Input } from "../ui/input";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface SettingsModalProps {
  currentUser: User | null;
}

export const SettingsModal = ({ currentUser }: SettingsModalProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/settings", data)
      .then(() => {
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };

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
        <DialogTitle>Profile</DialogTitle>
        <DialogDescription>Edit your profile information and user avatar</DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 flex flex-col gap-y-8">
            <Input type="name" placeholder="Name" {...register("name")} />
            <div className="mt-2 flex items-center gap-x-3">
              <Image
                width="48"
                height="48"
                className="rounded-full"
                src={image || currentUser?.image || "/images/placeholder.jpg"}
                alt="Avatar"
              />
              <CldUploadButton
                options={{ maxFiles: 1 }}
                onSuccess={handleUpload}
                uploadPreset="cdqkfa7y"
              >
                <Button disabled={isLoading} variant={"secondary"} type="button">
                  Change
                </Button>
              </CldUploadButton>
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant={"outline"} className="w-full" disabled={isLoading}>
            Cancel
          </Button>
        </DialogClose>
        <DialogTrigger asChild>
          <Button className="w-full" variant={"default"} type="submit" disabled={isLoading}>
            Confirm
          </Button>
        </DialogTrigger>
      </DialogFooter>
    </Dialog>
  );
};

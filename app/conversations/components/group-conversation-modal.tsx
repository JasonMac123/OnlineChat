"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { MessageSquarePlus } from "lucide-react";

import { User } from "@prisma/client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Select from "@/components/select";
import { Button } from "@/components/ui/button";

interface GroupConversationModalProps {
  users: User[];
}

export const GroupConversationModal = ({ users }: GroupConversationModalProps) => {
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
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        ...data,
        isGroup: true,
      })
      .then(() => {
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsLoading(false));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
          <MessageSquarePlus size={24} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a group chat!</DialogTitle>
          <DialogDescription>Invite multiple users to a group chat!</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>Enter group chat name</h2>
            <Input
              type="name"
              placeholder="Group Chat Name"
              {...register("name", { required: true })}
            />
            <Select
              disabled={isLoading}
              label="Members"
              options={users.map((user) => ({ value: user.id, label: user.name }))}
              onChange={(value) => setValue("members", value, { shouldValidate: true })}
              value={members}
            />
          </div>
          <div className="mt-6 flex items-center gap-x-2">
            <DialogClose>
              <Button disabled={isLoading} variant={"outline"} type="button">
                Close
              </Button>
            </DialogClose>
            <DialogTrigger>
              <Button type="submit">Create</Button>
            </DialogTrigger>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

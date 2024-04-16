"use client";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useConversation from "@/app/hooks/useConversation";
import { ImageUp, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";

export const ChatMessages = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", { shouldValidate: true });
    axios.post("/api/messages", { ...data, conversationId });
  };

  return (
    <div className="py-4 px-4 bg-white border-t- flex items-cetner gap-2 lg:gap-4 w-full">
      <ImageUp size={32} className="text-sky-400" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
        <div className="relative w-full">
          <Input
            id="message"
            type="text"
            autoComplete="message"
            {...register("message", { required: true })}
            placeholder="write a message"
            className="text-black font-light py-2 px-4 bg-neutral-200 w-full rounded-full focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"
        >
          <SendHorizonal size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

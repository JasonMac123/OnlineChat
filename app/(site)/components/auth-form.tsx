"use client";

import { Github, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import AuthSocialButton from "./auth-social-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Variant = "LOGIN" | "REGISTER";

export const AuthForm = () => {
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
        bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={() => {}}>
          {variant === "REGISTER" && <Input type="text" placeholder="Name" />}
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <div>
            <Button className="w-full">{variant === "LOGIN" ? "Sign In" : "Register"}</Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 space-y-2 gap-2">
            <AuthSocialButton icon={Github} label="Github" onClick={() => {}} />
            <AuthSocialButton icon={Youtube} label="Youtube" onClick={() => {}} />
          </div>
        </div>
        <div
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
        >
          <div>{variant === "LOGIN" ? "New to Messenger?" : "Already have an account?"}</div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

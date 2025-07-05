"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";
import { Input, Label } from "../ui";

interface Props extends React.ComponentProps<"input"> {
  //   icon: React.ReactNode;
  register: UseFormRegisterReturn;
  error: string | undefined;
  wrapperClassName?: string;
  labelName?: string;
  isShowError?: boolean;
}

export const PasswordInput = ({
  //   icon,
  className,
  register,
  wrapperClassName,
  error,
  labelName,
  isShowError = true,
  ...props
}: Props) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShowPassword = () => {
    setIsShow((pre) => !pre);
  };
  return (
    <div className={cn(wrapperClassName)}>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-700 font-medium">
          {labelName}
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={isShow ? "text" : "password"}
            placeholder="••••••••••"
            className={cn(
              "h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500 pr-12",
              className
            )}
            {...register}
            {...props}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {isShow ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <>{isShowError && <p className="inputCombo-error">{error || ""}</p>}</>
    </div>
  );
};

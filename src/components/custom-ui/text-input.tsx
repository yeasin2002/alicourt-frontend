import { cn } from "@/lib/utils";
import React from "react";
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

export const TextInput = ({
  className,
  register,
  wrapperClassName,
  error,
  labelName,
  isShowError = true,
  ...props
}: Props) => {
  return (
    <div className={wrapperClassName}>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-primary font-medium">
          {labelName}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Asoctujaman@gmail.com"
          className={cn(
            "h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500",
            className
          )}
          {...register}
          {...props}
        />
      </div>

      <>
        {isShowError && (
          <p className="text-xs text-red-600 pt-1">{error || ""}</p>
        )}
      </>
    </div>
  );
};

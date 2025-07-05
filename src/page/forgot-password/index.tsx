"use client";

import { PasswordInput, TextInput } from "@/components/custom-ui";
import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button } from "@/components/ui";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean(),
});

export function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = () => {};

  return (
    <AuthLayout isShowSocialAuth={false}>
      <AuthHeader
        title="Set new Password"
        description="Create a new password."
        description2="insure it differs from previous one."
        className="gap-y-7"
      />

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextInput
          register={register("email")}
          error={errors.email?.message}
          labelName="Email"
          type="email"
        />

        <PasswordInput
          register={register("password")}
          error={errors.password?.message}
          labelName="Password"
        />

        <Button className="h-12 purple-blue-btn rounded-full" type="submit">
          CONFIRM PASSWORD
        </Button>
      </form>
    </AuthLayout>
  );
}

"use client";

import { PasswordInput, TextInput } from "@/components/custom-ui";
import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button, Checkbox, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const singupSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean(),
});

export function SingupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(singupSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = () => {};

  return (
    <AuthLayout isShowSocialAuth isShowLogo={false} wrapperClassName="py-0">
      <AuthHeader
        title="SING UP to Account"
        description="Please enter your email and password to continue"
        titleClassName="order-first"
      />

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextInput
          register={register("username")}
          error={errors.username?.message}
          labelName="Email"
        />

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

        <PasswordInput
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
          labelName="Password"
        />

        {/* Remember Password & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-gray-600">
              Remember Password
            </Label>
          </div>
          <Link
            to="/forgot-password"
            className="text-sm text-red-500 hover:text-red-600"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full"
          type="submit"
        >
          singup
        </Button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center mt-6">
        <span className="text-gray-600 text-sm">
          Already Have an Account?
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-medium ml-1"
          >
            Longin
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}

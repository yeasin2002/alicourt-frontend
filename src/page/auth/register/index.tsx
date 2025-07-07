import { PasswordInput, TextInput } from "@/components/custom-ui";
import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button, Checkbox, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";

import { singupSchema, type singupSchemaType } from "@/data";
import { useRegisterMutation } from "@/store/api";
import type { ApiResponse, BaseResponse } from "@/types";
import { Loader2 } from "lucide-react";

export function SingupPage() {
  const [registerMutation] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<singupSchemaType>({
    resolver: zodResolver(singupSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = async (data: singupSchemaType) => {
    try {
      const req = (await registerMutation({
        email: data.email,
        password: data.password,
        username: data.username,
        password2: data.confirmPassword,
      })) as ApiResponse<BaseResponse>;
      console.log(req);
      if (req.error && !req.data) throw new Error(req?.error?.data?.error);

      toast.success(req?.data?.message || "Success");
      return navigate("/verification", { state: { email: data.email } });
    } catch (error) {
      return toast.error((error as Error).message || "something went wrong");
    }
  };
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
          labelName="username"
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
          className="h-12 rounded-full purple-blue-btn cursor-pointer"
          type="submit"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : `singup`}
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

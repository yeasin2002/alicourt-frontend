import { PasswordInput } from "@/components/custom-ui";
import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button } from "@/components/ui";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  ConfirmforgotPasswordSchema,
  type ConfirmforgotPasswordSchemaType,
} from "@/data";
import { useConfirmResetPasswordMutation } from "@/store/api/auth-api";
import type { ApiResponse, BaseResponse } from "@/types";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router";

export function ConfirmResetPasswordPage() {
  const [confirmResetPassword] = useConfirmResetPasswordMutation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const uidb64 = searchParams.get("uidb64") as string;
  const token = searchParams.get("token") as string;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ConfirmforgotPasswordSchema),
  });

  if (!token || !uidb64) {
    navigate("/reset-password", { replace: true });
  }

  const onSubmit = async (data: ConfirmforgotPasswordSchemaType) => {
    try {
      const req = (await confirmResetPassword({
        uidb64,
        token,
        password: data.password,
        confirm_password: data.confirm_password,
      })) as ApiResponse<BaseResponse>;

      if (req.error && !req.data) throw new Error(req?.error?.data?.error);

      toast.success(req?.data?.message || "kindly check your email");
      return navigate("/login", { replace: true });
    } catch (error) {
      return toast.error((error as Error).message || "something went wrong");
    }
  };

  return (
    <AuthLayout isShowSocialAuth={false}>
      <AuthHeader
        title="Confirm Reset Password"
        description="Create a new password."
        description2="insure it differs from previous one."
        className="gap-y-7"
      />

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <PasswordInput
          register={register("password")}
          error={errors.password?.message}
          labelName="Password"
        />

        <PasswordInput
          register={register("confirm_password")}
          error={errors.confirm_password?.message}
          labelName="Confirm Password"
        />

        <Button
          className="h-12 purple-blue-btn rounded-full cursor-pointer"
          type="submit"
        >
          {isSubmitting ? <Loader2Icon className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    </AuthLayout>
  );
}

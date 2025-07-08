import { TextInput } from "@/components/custom-ui";
import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button } from "@/components/ui";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { forgotPasswordSchema, type forgotPasswordSchemaType } from "@/data";
import { useResetPasswordMutation } from "@/store/api/auth-api";
import type { ApiResponse, BaseResponse } from "@/types";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function ResetPasswordPage() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [resetPassword] = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: forgotPasswordSchemaType) => {
    try {
      const req = (await resetPassword({
        email: data.email,
      })) as ApiResponse<BaseResponse>;

      if (req.error && !req.data) throw new Error(req?.error?.data?.error);

      return setIsCompleted(true);
    } catch (error) {
      return toast.error((error as Error).message || "something went wrong");
    }
  };

  if (isCompleted) return <ResetPassModal />;
  return (
    <AuthLayout isShowSocialAuth={false}>
      <AuthHeader
        title="Reset Password"
        description="Create a new password."
        description2="insure it differs from previous one."
        className="gap-y-7 "
      />

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextInput
          register={register("email")}
          error={errors.email?.message}
          labelName="Email"
          type="email"
        />

        <Button className="h-12 purple-blue-btn rounded-full" type="submit">
          {isSubmitting ? <Loader2Icon className="animate-spin" /> : "Confirm"}
        </Button>
      </form>
    </AuthLayout>
  );
}

export const ResetPassModal = () => {
  return (
    <AuthLayout>
      <AuthHeader
        title={"Congratulations!"}
        description={"Kindly check your email."}
        description2={"We have sent you a link to reset your password."}
        className="gap-y-7"
        descriptionClassName="order-last"
      />
    </AuthLayout>
  );
};

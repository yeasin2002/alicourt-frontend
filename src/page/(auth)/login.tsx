import { PasswordInput, TextInput } from "@/components/custom-ui";
import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button, Checkbox, Label } from "@/components/ui";
import { setCredentials, signin } from "@/store/features/authSlice";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchemaType } from "@/data";
import { useAppDispatch } from "@/hooks/use-redux";
import { useLoginMutation } from "@/store/api/auth-api";
import type { ApiResponse, LoginResponse } from "@/types";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";

export function LoginPage() {
  const [loginMutation] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const req = (await loginMutation({
        email: data.email,
        password: data.password,
      })) as ApiResponse<LoginResponse>;

      if (req.error && !req.data) throw new Error(req?.error?.data?.error);

      dispatch(
        setCredentials({
          access: req.data.token.access,
          refresh: req.data.token.refresh,
        })
      );
      dispatch(signin({ email: data.email }));
      toast.success(req.data.message);
      return navigate("/");
    } catch (error) {
      toast.error((error as Error).message || "something went wrong");
    }
  };

  return (
    <AuthLayout isShowSocialAuth>
      <AuthHeader
        title="Login to Account"
        description="Please enter your email and password to continue"
        titleClassName="order-first"
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

        {/* Remember Password & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              {...register("remember")}
              onCheckedChange={(val: boolean) => setValue("remember", val)}
            />
            <Label htmlFor="remember" className="text-sm text-primary">
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
          className="h-12 rounded-full purple-blue-btn cursor-pointer text-primary-foreground"
          type="submit"
        >
          {isSubmitting ? <Loader2Icon className="animate-spin" /> : "Login"}
        </Button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center mt-6">
        <span className="text-gray-600 text-sm">
          {"Don't Have An Account? "}
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign Up
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}

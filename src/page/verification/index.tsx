import { AuthLayout } from "@/components/layout";
import { Button } from "@/components/ui";
import { Link } from "react-router";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export function VerificationPage() {
  const [value, setValue] = useState<string>("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout isShowSocialAuth>
      <div className={"text-center mb-8 flex flex-col space-y-4"}>
        <p className={"text-gray-600  flex flex-col text-lg font-montserrat"}>
          <span>Congratulations!</span>
          <span>Pleas enter your 6 digit code </span>
        </p>

        <h1
          className={
            "text-2xl font-semibold text-gray-800 mb-2 font-montserrat order-last"
          }
        >
          Verification Code
        </h1>
      </div>
      <div className="flex items-center justify-center  gap-y-2 mb-5">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="gap-x-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="rounded-md  bg-gray-300"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* Form */}
      <form className="space-y-6" noValidate onSubmit={onSubmit}>
        <Button className="rounded-full purple-blue-btn" type="submit">
          verify
        </Button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center mt-6">
        <span className="text-gray-600 text-sm">
          {"Don't Have An Account? "}
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign Up
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}

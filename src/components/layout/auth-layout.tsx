"use client";

import logo from "@/assets/logo.svg";
import { SocialAuth } from "@/components/shared";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
  isShowSocialAuth?: boolean;
}

export function AuthLayout({ children, isShowSocialAuth }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="logo" />
              <span className="text-xl font-semibold text-gray-800">
                gameplan
              </span>
            </div>
          </div>
          {children}
          {isShowSocialAuth && (
            <div>
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">
                  Or Login With
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <SocialAuth />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

type AuthHeaderProps = {
  title: string;
  description: string;
};
export const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2 font-montserrat">
        {title}
      </h1>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

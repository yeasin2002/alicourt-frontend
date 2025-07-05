import { Logo, SocialAuth } from "@/components/shared";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  isShowSocialAuth?: boolean;
  isShowLogo?: boolean;
  wrapperClassName?: string;
}

export function AuthLayout({
  children,
  isShowSocialAuth,
  isShowLogo = true,
  wrapperClassName,
}: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg pt-0">
        <CardContent className={cn("px-8 py-8", wrapperClassName)}>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            {isShowLogo && <Logo />}
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
  description2?: string;

  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};
export const AuthHeader = ({
  title,
  description,
  description2,

  className,
  descriptionClassName,
  titleClassName,
}: AuthHeaderProps) => {
  return (
    <div className={cn("text-center mb-8 flex flex-col", className)}>
      <h1
        className={cn(
          "text-2xl font-semibold text-gray-800 mb-2 font-montserrat order-last",
          titleClassName
        )}
      >
        {title}
      </h1>
      <p className={cn("text-gray-600 text-sm", descriptionClassName)}>
        {description}
        <br />
        {description2}
      </p>
    </div>
  );
};

import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button } from "@/components/ui";

export function CongratulationsModal() {
  return (
    <AuthLayout isShowSocialAuth={false}>
      <AuthHeader
        title="Congratulations"
        description="Your password has been updated, "
        description2="please change your password regularly."
        className="gap-y-7"
      />

      <Button className="h-12 purple-blue-btn rounded-full" type="submit">
        CONFIRM PASSWORD
      </Button>
    </AuthLayout>
  );
}

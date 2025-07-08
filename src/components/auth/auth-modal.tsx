import { AuthHeader, AuthLayout } from "@/components/layout";
import { Button } from "@/components/ui";

type Props = {
  title: string;
  description: string;
  description2: string;
  className?: string;
  cta_text: string;
};

export function CongratulationsModal({
  title,
  description,
  description2,
  cta_text,
}: Props) {
  return (
    <AuthLayout isShowSocialAuth={false}>
      <AuthHeader
        title={title}
        description={description}
        description2={description2}
        className="gap-y-7"
      />

      <Button className="h-12 purple-blue-btn rounded-full" type="submit">
        {cta_text}
      </Button>
    </AuthLayout>
  );
}

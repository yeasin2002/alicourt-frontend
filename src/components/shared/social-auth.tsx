import {
  AppleIcon,
  FacebookLogoIcon,
  GoogleLogoIcon,
} from "@/components/icons";

interface Props extends React.ComponentProps<"div"> {}

export const SocialAuth = ({ ...props }: Props) => {
  return (
    <div className="flex justify-center space-x-4" {...props}>
      <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
        <AppleIcon />
      </button>

      <button className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
        <GoogleLogoIcon />
      </button>

      <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
        <FacebookLogoIcon />
      </button>
    </div>
  );
};

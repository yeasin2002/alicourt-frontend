import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"img"> {
  textClassName?: string;
}

export const Logo = ({ className, textClassName, ...props }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="logo" {...props} className={cn(className)} />
      <span
        className={cn("text-xl font-semibold text-gray-800", textClassName)}
      >
        gameplan
      </span>
    </div>
  );
};

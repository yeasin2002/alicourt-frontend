import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Loader2, Send } from "lucide-react";

interface Props extends React.ComponentProps<"input"> {
  disabledButton?: boolean;
  wrapperClassName?: string;
}

export const ChatInput = ({
  disabledButton,

  wrapperClassName,
  ...props
}: Props) => {
  return (
    <div
      className={cn("p-6 bg-white border-t border-gray-200", wrapperClassName)}
    >
      <div className="relative">
        <Input
          placeholder="Type Your Text"
          className="h-14 pr-14 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:ring-purple-500"
          {...props}
        />

        <Button
          disabled={disabledButton}
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2  rounded-full h-10 w-10 p-0 disabled:opacity-80"
          variant={"purple-blue"}
          type="submit"
        >
          {disabledButton ? (
            <Loader2 className="animate-spin text-white size-4" />
          ) : (
            <Send className="h-4 w-4 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

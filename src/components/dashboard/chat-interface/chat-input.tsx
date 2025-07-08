import { Button, Input } from "@/components/ui";
import { Send } from "lucide-react";

interface Props extends React.ComponentProps<"input"> {
  disabledButton?: boolean;
  onSend?: () => void;
}

export const ChatInput = ({
  disabledButton,
  onSend = () => {},
  ...props
}: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend?.();
  };

  return (
    <form
      className="p-6 bg-white border-t border-gray-200"
      onSubmit={handleSubmit}
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
          className="absolute right-2 top-1/2 transform -translate-y-1/2  rounded-full h-10 w-10 p-0 disabled:opacity-50"
          variant={"purple-blue"}
          type="submit"
        >
          <Send className="h-4 w-4 text-white" />
        </Button>
      </div>
    </form>
  );
};

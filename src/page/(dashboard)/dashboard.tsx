import { ChatInput, SuggestedQuestions } from "@/components/dashboard";
import { DashboardLayout } from "@/components/layout";
import { useState } from "react";

interface Props extends React.ComponentProps<"div"> {}

export const DashboardPage = ({ ...props }: Props) => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSend = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  return (
    <DashboardLayout className="h-screen flex bg-gray-50" {...props}>
      <div className="flex flex-col h-full bg-gray-50 w-full px-6 space-y-2 overflow-y-auto justify-between ">
        <div></div>

        <div>
          <SuggestedQuestions
            onQuestionClick={(question) => setInputValue(question)}
          />

          <ChatInput
            disabled={isTyping}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabledButton={!inputValue.trim() || isTyping}
            onSend={handleMessageSend}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

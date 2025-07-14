import {
  ChatInput,
  ChatMessageBubble,
  SuggestedQuestions,
} from "@/components/dashboard";
import { DashboardLayout } from "@/components/layout";
import { useCreateAiChatMutation } from "@/store/api";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router";

const userAvatar =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface Props extends React.ComponentProps<"div"> {}

export const DashboardPage = ({ ...props }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [topic, setTopic] = useState<null | string>();

  const navigation = useNavigate();
  const [createAiChat, { isLoading }] = useCreateAiChatMutation();

  const handleMessageSend = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await createAiChat({
        question: inputValue,
        topic: topic || "normal",
      });

      if (!res.data?.answer && res.error) new Error("something went wrong");

      setInputValue("");
      setTopic(null);
      navigation(`/chat/${res.data?.chat_id}`, { replace: true });

      console.log(res);
    } catch (error) {
      toast.error((error as Error).message || "something went wrong");
    }
  };

  return (
    <DashboardLayout className="h-screen flex bg-gray-50" {...props}>
      <div className="flex flex-col h-full bg-gray-50 w-full  space-y-2 overflow-y-auto justify-between ">
        <div className="p-4">
          {isLoading && inputValue && (
            <div>
              <ChatMessageBubble
                message={{
                  id: "1",
                  type: "user",
                  message: inputValue,
                  timestamp: new Date().toISOString(),
                  avatar: userAvatar,
                }}
              />

              <ChatMessageBubble
                message={{
                  id: "1",
                  type: "bot",
                  message: "generating response...",
                  timestamp: "just now",
                }}
              />
            </div>
          )}
        </div>

        <div>
          <SuggestedQuestions
            onQuestionClick={(question) => setInputValue(question)}
          />

          <form
            className="flex items-center bg-background px-4"
            onSubmit={handleMessageSend}
          >
            <Select onValueChange={(val) => setTopic(val)} required>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="science">Science</SelectItem>
              </SelectContent>
            </Select>

            <ChatInput
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              wrapperClassName="flex-1"
              disabledButton={isLoading}
              required
            />
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

"use client";

import {
  ChatInput,
  ChatMessageBubble,
  SuggestedQuestions,
} from "@/components/dashboard";
import { DashboardLayout } from "@/components/layout";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreateAiChatMutation,
  useGetChatListByChatIdQuery,
} from "@/store/api";
import toast from "react-hot-toast";
import { useParams } from "react-router";

export function SingleChatPage() {
  const [inputValue, setInputValue] = useState("");
  const [topic, setTopic] = useState<null | string>();
  const { id } = useParams();

  const [createAiChat, { isLoading: isPending }] = useCreateAiChatMutation();
  const { data } = useGetChatListByChatIdQuery(id!);
  console.log(data);

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
      // navigation(`/chat/${res.data?.chat_id}`, { replace: true });

      console.log(res);
    } catch (error) {
      toast.error((error as Error).message || "something went wrong");
    }
  };

  return (
    <DashboardLayout className="h-screen flex bg-gray-50">
      <div className="flex flex-col h-full bg-gray-50 w-full px-6 space-y-2 overflow-y-auto justify-between">
        <div className="pt-4">
          {data?.map((chat, index) => (
            <ChatMessageBubble
              key={index}
              message={{
                id: chat.id,
                message: chat.answer!,
                type: chat.user ? "user" : "bot",
                timestamp: chat.timestamp,
              }}
            />
          ))}
        </div>

        <div>
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
                disabled={isPending}
                wrapperClassName="flex-1"
                disabledButton={isPending}
                required
              />
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

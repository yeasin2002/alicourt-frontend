"use client";

import { DashboardLayout } from "@/components/layout";
import { demo_messages } from "@/data/demo-chat";
import { dateToTimeNormalize } from "@/lib/date-time-normalize";
import { useState } from "react";
import { ChatInput } from "./components/chat-input";
import ChatMessageBubble from "./components/chat-message-bubble";
import SuggestedQuestions from "./components/suggested-questions";

export function DashboardPage() {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <DashboardLayout className="h-screen flex bg-gray-50">
      <div className="flex flex-col h-full bg-gray-50 w-full px-6 space-y-2 overflow-y-auto">
        {demo_messages.map((message, index) => (
          <ChatMessageBubble
            key={index}
            message={message}
            formatTime={dateToTimeNormalize}
          />
        ))}

        <SuggestedQuestions
          onQuestionClick={(question) => setInputValue(question)}
        />

        <ChatInput
          disabled={isTyping}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabledButton={!inputValue.trim() || isTyping}
          onSend={() => {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
            }, 2000);
          }}
        />
      </div>
    </DashboardLayout>
  );
}

"use client";

import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { demo_messages, type ChatMessage } from "@/data/demo-chat";
import { Bot, Send, User } from "lucide-react";

interface ChatInterfaceProps {
  messages?: ChatMessage[];
  isTyping?: boolean;
  onSendMessage?: (message: string) => void;
  inputValue?: string;
  onInputChange?: (value: string) => void;
}

export function ChatInterface({
  messages = demo_messages,
  isTyping = false,
  onSendMessage,
  inputValue = "",
  onInputChange,
}: ChatInterfaceProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSend = () => {
    if (onSendMessage && inputValue.trim()) {
      onSendMessage(inputValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 w-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
            }`}
          >
            {/* Avatar */}
            <Avatar className="w-10 h-10 flex-shrink-0">
              {message.type === "user" ? (
                <>
                  <AvatarImage
                    src={message.avatar || "/placeholder.svg"}
                    alt="User"
                  />
                  <AvatarFallback className="bg-purple-100">
                    <User className="w-5 h-5 text-purple-600" />
                  </AvatarFallback>
                </>
              ) : (
                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Bot className="w-5 h-5 text-white" />
                </AvatarFallback>
              )}
            </Avatar>

            {/* Message Bubble */}
            <div
              className={` px-4 py-3 rounded-2xl ${
                message.type === "user"
                  ? "bg-white border border-gray-200 text-gray-800"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.message}</p>
              <p
                className={`text-xs mt-2 ${
                  message.type === "user" ? "text-gray-500" : "text-purple-100"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Suggested Questions */}
      <SuggestedQuestions onQuestionClick={onInputChange} />

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-gray-200">
        <div className="relative">
          <Input
            value={inputValue}
            onChange={(e) => onInputChange?.(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type Your Text"
            className="h-14 pr-14 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:ring-purple-500"
            disabled={isTyping}
          />
          <Button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 rounded-full h-10 w-10 p-0 disabled:opacity-50"
          >
            <Send className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Typing Indicator Component
function TypingIndicator() {
  return (
    <div className="flex items-start space-x-3">
      <Avatar className="w-10 h-10 flex-shrink-0">
        <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Bot className="w-5 h-5 text-white" />
        </AvatarFallback>
      </Avatar>
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-2xl">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Suggested Questions Component
interface SuggestedQuestionsProps {
  onQuestionClick?: (question: string) => void;
}

function SuggestedQuestions({ onQuestionClick }: SuggestedQuestionsProps) {
  const suggestions = [
    "What are the team standings?",
    "Show me player statistics",
    "When is the next match?",
  ];

  return (
    <div className="px-6 pb-4">
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-purple-600 border-purple-200 hover:bg-purple-50 bg-transparent"
            onClick={() => onQuestionClick?.(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
}

// Export types for RTK integration
export type { ChatMessage };

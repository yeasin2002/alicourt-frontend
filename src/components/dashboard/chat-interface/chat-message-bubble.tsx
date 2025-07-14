import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import React from "react";

export interface ChatMessage {
  id: string | number;
  type: "user" | "bot";
  message: string;
  timestamp: string;
  avatar?: string;
}

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

export const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({
  message,
}) => (
  <div
    className={`flex items-start space-x-3  ${
      message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
    }`}
  >
    <Avatar className="w-10 h-10 flex-shrink-0">
      {message.type === "user" ? (
        <>
          <AvatarImage src={message.avatar || "/placeholder.svg"} alt="User" />
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
    <div
      className={`px-4 py-3 rounded-2xl max-w-4xl ${
        message.type === "user"
          ? "bg-white border border-gray-200 text-gray-800"
          : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      }`}
    >
      <div
        className="text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: message?.message }}
      />
      <p
        className={`text-xs mt-2 ${
          message.type === "user" ? "text-gray-500" : "text-purple-100"
        }`}
      >
        {/* {formatTime(message.timestamp)} */}
        {message.timestamp}
      </p>
    </div>
  </div>
);

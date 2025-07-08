import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot } from "lucide-react";
import React from "react";

const TypingIndicator: React.FC = () => (
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

export default TypingIndicator;

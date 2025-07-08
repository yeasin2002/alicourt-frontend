import { Button } from "@/components/ui/button";
import React from "react";

interface SuggestedQuestionsProps {
  onQuestionClick?: (question: string) => void;
  suggestions?: string[];
}

const defaultSuggestions = [
  "What are the team standings?",
  "Show me player statistics",
  "When is the next match?",
];

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  onQuestionClick,
  suggestions = defaultSuggestions,
}) => (
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



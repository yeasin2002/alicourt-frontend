

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatInterface() {
  return (
    <div className="flex-1 flex flex-col justify-end p-6">
      <div className="mb-6">
        <Button
          variant="outline"
          className="text-purple-600 border-purple-200 hover:bg-purple-50 bg-transparent"
        >
          What should I type in text box?
        </Button>
      </div>

      <div className="relative">
        <Input
          placeholder="Type Your Text"
          className="h-14 pr-14 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:ring-purple-500"
        />
        <Button
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 rounded-full h-10 w-10 p-0"
        >
          <Send className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
}

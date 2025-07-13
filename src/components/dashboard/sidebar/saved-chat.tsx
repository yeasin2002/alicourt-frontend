import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoreHorizontal } from "lucide-react";

interface Props extends React.ComponentProps<"div"> {
  isCollapsed: boolean;
}

const saveClass = ["Last chat", "Last chat", "Last chat"];

export const SavedChat = ({ isCollapsed }: Props) => {
  return (
    <>
      {/* Save Class */}
      {!isCollapsed && (
        <div className="px-4 py-2 flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Save Class</h3>
            <Select defaultValue="all">
              <SelectTrigger className="w-24 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {saveClass.map((chat, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded"
              >
                <span className="text-gray-700 text-sm truncate">{chat}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 flex-shrink-0"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Collapsed Save Class */}
      {isCollapsed && (
        <div className="px-2 py-2 flex-1">
          <div className="space-y-2">
            {saveClass.slice(0, 3).map((_, index) => (
              <div
                key={index}
                className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

import { useGetAllChatListQuery } from "@/store/api";
import { Link } from "react-router";

interface Props extends React.ComponentProps<"div"> {
  isCollapsed: boolean;
}
const recentPlans = ["Last Plan", "Last Plan", "Last Plan"];

export const ChatHistory = ({ isCollapsed }: Props) => {
  const user = 1;
  const { data } = useGetAllChatListQuery(user);

  return (
    <div>
      {!isCollapsed && (
        <div className="px-4 py-2">
          <h3 className="font-semibold text-gray-800">Recent plans</h3>

          <div className="pt-1">
            {data?.map((chat, index) => (
              <Link
                to={`/chat/${chat.id}`}
                key={index}
                className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded"
              >
                <span className="text-gray-700 text-sm truncate ">
                  {chat.topic}
                </span>
                {/* <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 flex-shrink-0"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button> */}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Collapsed Recent Plans */}
      {isCollapsed && (
        <div className="px-2 py-2">
          <div className="space-y-2">
            {recentPlans.slice(0, 3).map((_, index) => (
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
    </div>
  );
};

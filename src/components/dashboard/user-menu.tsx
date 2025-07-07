import { useAppDispatch } from "@/hooks/use-redux";
import { logout } from "@/store/features/authSlice";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import {
  ChevronDown,
  FileText,
  HelpCircle,
  LogOut,
  Settings,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface UserMenuProps {
  user: {
    name: string;
    title: string;
    avatar: string;
  };
}

export function UserMenu({ user }: UserMenuProps) {
  const [moodEnabled, setMoodEnabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-3 p-2 h-auto"
        >
          <div className="text-right">
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.title}</div>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2">
        <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer">
          <User className="h-5 w-5 text-gray-600" />
          <span className="font-medium">PROFILE</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer">
          <Settings className="h-5 w-5 text-gray-600" />
          <span className="font-medium">MANAGE SUBSCRIPTION</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer">
          <FileText className="h-5 w-5 text-gray-600" />
          <span className="font-medium">FAQ</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer">
          <HelpCircle className="h-5 w-5 text-gray-600" />
          <span className="font-medium">HELP & SUPPORT</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer">
          <FileText className="h-5 w-5 text-gray-600" />
          <span className="font-medium">TRAMS & CONDITION</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer">
          <Shield className="h-5 w-5 text-gray-600" />
          <span className="font-medium">PRIVACY</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex items-center space-x-3 p-3 cursor-pointer text-red-500 hover:text-red-600"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Log Out</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            <span className="font-medium">MOOD</span>
          </div>
          <Switch checked={moodEnabled} onCheckedChange={setMoodEnabled} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

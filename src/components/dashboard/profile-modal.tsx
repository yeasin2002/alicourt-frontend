import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Mail, User, X } from "lucide-react";

interface ProfileModalProps {
  className?: string;
  onClose: () => void;
}

const user = {
  name: "Ali",
  email: "ali@gmail.com",
  about: "Football Couch",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  accountType: "Standard Account",
};

export function ProfileModal({ onClose, className }: ProfileModalProps) {
  return (
    <div
      className={cn(
        " bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 relative",
        className
      )}
    >
      <div className="bg-white rounded-2xl shadow-md w-full min-w-2xl max-w-4xl ">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">
            Personal Information
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 rounded-full bg-purple-100 hover:bg-purple-200 cursor-pointer"
          >
            <X className="h-4 w-4 text-purple-600" />
          </Button>
        </div>

        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                  />
                  <AvatarFallback className="text-2xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-black rounded-full p-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">
                {user.name}
              </h3>

              <Badge className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white bg-opacity-30 rounded-full"></div>
                  <span>{user.accountType}</span>
                </div>
              </Badge>
            </div>

            {/* Form Section */}
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    defaultValue={user.name}
                    className="pl-10 h-12 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    className="pl-10 h-12 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="about" className="text-gray-700 font-medium">
                  About You
                </Label>
                <Input
                  id="about"
                  defaultValue={user.about}
                  className="h-12 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white font-medium rounded-xl mt-8">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

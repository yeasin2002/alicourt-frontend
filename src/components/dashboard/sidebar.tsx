import logo from "@/assets/logo.svg";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Calendar,
  Menu,
  MoreHorizontal,
  Plus,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const recentPlans = ["Last Plan", "Last Plan", "Last Plan"];
  const saveClass = ["Last chat", "Last chat", "Last chat"];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 md:hidden bg-background shadow-md "
        onClick={toggleMobileSidebar}
      >
        {isMobileOpen ? (
          <X className="h-4 w-4 " />
        ) : (
          <Menu className="h-4 w-4 text-black" />
        )}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 ease-in-out relative z-40",
          // Desktop responsive width
          isCollapsed ? "w-16" : "w-64",
          // Mobile positioning
          "fixed md:relative",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
      >
        {/* Desktop Toggle Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute -right-3 top-6 z-10 hidden md:flex bg-white border border-gray-200 rounded-full h-6 w-6 p-0 shadow-sm hover:shadow-md"
          onClick={toggleSidebar}
        >
          <Menu className="h-3 w-3" />
        </Button>

        {/* Logo */}
        <Link
          to="/"
          className={cn("p-6 border-b border-gray-200", isCollapsed && "px-3")}
        >
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" />
            {!isCollapsed && (
              <span className="text-xl font-semibold text-gray-800">
                gameplan
              </span>
            )}
          </div>
        </Link>

        {/* Main Actions */}
        <div className={cn("p-4 space-y-3", isCollapsed && "px-2")}>
          <Link
            to={"/"}
            className={buttonVariants({
              className: {
                "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white !rounded-full h-10 ":
                  true,
                "w-10 px-0": isCollapsed,
                "w-full": !isCollapsed,
              },
            })}
            title={isCollapsed ? "New Plans" : undefined}
          >
            <Plus className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">New Plans</span>}
          </Link>

          <Link to="/calendar">
            <Button
              variant="ghost"
              className={cn(
                "text-gray-700 h-10",
                isCollapsed
                  ? "w-10 px-0 justify-center"
                  : "w-full justify-start"
              )}
              title={isCollapsed ? "Calendar" : undefined}
            >
              <Calendar className="h-4 w-4" />
              {!isCollapsed && <span className="ml-3">Calendar</span>}
            </Button>
          </Link>

          <Link to="/create-class">
            <Button
              variant="ghost"
              className={cn(
                "text-gray-700 h-10",
                isCollapsed
                  ? "w-10 px-0 justify-center"
                  : "w-full justify-start"
              )}
              title={isCollapsed ? "Create Class" : undefined}
            >
              <BookOpen className="h-4 w-4" />
              {!isCollapsed && <span className="ml-3">Create Class</span>}
            </Button>
          </Link>
        </div>

        {/* Recent Plans */}
        {!isCollapsed && (
          <div className="px-4 py-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Recent plans</h3>
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
              {recentPlans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded"
                >
                  <span className="text-gray-700 text-sm truncate">{plan}</span>
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

        {/* Upgrade Button */}
        <div
          className={cn("p-4 border-t border-gray-200", isCollapsed && "px-2")}
        >
          <Button
            className={cn(
              "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full h-10",
              isCollapsed ? "w-10 px-0" : "w-full"
            )}
            title={isCollapsed ? "Upgrade To Pro" : undefined}
          >
            {isCollapsed ? (
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            ) : (
              "Upgrade To Pro"
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

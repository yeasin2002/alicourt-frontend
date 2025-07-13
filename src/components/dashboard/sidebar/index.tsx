import logo from "@/assets/logo.svg";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, Calendar, Menu, Plus, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ChatHistory } from "./chat-history";
import { SavedChat } from "./saved-chat";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

          <Link to="/class">
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

        <ChatHistory isCollapsed={isCollapsed} />
        <SavedChat isCollapsed={isCollapsed} />

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

import type React from "react";

import { ProfileModal, Sidebar, UserMenu } from "@/components/dashboard";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DashboardLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const user = {
    name: "Dr. Ali",
    title: "Medicine specialist",
    email: "ali@gmail.com",
    about: "Football Couch",
    avatar: "/placeholder.svg?height=128&width=128",
    accountType: "Standard Account",
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-end">
          <UserMenu user={user} />
        </div>

        {/* Page Content */}
        <div className={cn("flex-1 overflow-auto", className)}>{children}</div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={user}
      />
    </div>
  );
}

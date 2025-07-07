import type React from "react";
import { useState } from "react";

import { ProfileModal, Sidebar, UserMenu } from "@/components/dashboard";
import { cn } from "@/lib/utils";

const user = {
  name: "Dr. Ali",
  title: "Medicine specialist",
  email: "ali@gmail.com",
  about: "Football Couch",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  accountType: "Standard Account",
};

export function DashboardLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-end">
          <UserMenu user={user} />
        </div>

        <div className={cn("flex-1 overflow-auto", className)}>{children}</div>
      </div>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={user}
      />
    </div>
  );
}

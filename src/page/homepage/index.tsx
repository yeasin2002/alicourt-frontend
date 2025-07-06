"use client";

import { useState } from "react";

import {
  ChatInterface,
  ProfileModal,
  Sidebar,
  UserMenu,
} from "@/components/dashboard";

export function Homepage() {
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

        {/* Chat Interface */}
        <ChatInterface />
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

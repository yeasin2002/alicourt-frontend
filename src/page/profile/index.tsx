"use client";


import { ProfileModal } from "@/components/dashboard";

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ProfileModal isOpen={true} className="bg-white" />
    </div>
  );
}

"use client";

import { ProfileModal } from "@/components/dashboard";
import { useNavigate } from "react-router";

export function ProfilePage() {
  const navigate = useNavigate();

  const handleClose = () => {
    return navigate(-1);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ProfileModal className="bg-white" onClose={handleClose} />
    </div>
  );
}

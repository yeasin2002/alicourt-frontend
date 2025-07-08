import type React from "react";

import { ProfileModal, Sidebar, UserMenu } from "@/components/dashboard";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

export function DashboardLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const navigate = useNavigate();

  const handleClose = () => {
    return navigate(-1);
  };

  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-end">
          <UserMenu />
        </div>

        <div className={cn("flex-1 overflow-auto", className)}>{children}</div>
      </div>

      <ProfileModal onClose={handleClose} />
    </div>
  );
}

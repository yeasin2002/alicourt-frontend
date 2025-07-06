import { ChatInterface } from "@/components/dashboard";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export function Homepage() {
  return (
    <DashboardLayout className="h-screen flex bg-gray-50">
      <ChatInterface />
    </DashboardLayout>
  );
}

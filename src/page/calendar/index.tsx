import { CalendarEvents } from "@/components/dashboard/calendar-events";
import { CalendarGrid } from "@/components/dashboard/calendar-grid";
import DashboardLayout from "@/components/layout/dashboard-layout";

export function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <CalendarGrid />
        </div>

        {/* Events Section */}
        <div className="border-t border-gray-200 bg-gray-50">
          <CalendarEvents />
        </div>
      </div>
    </DashboardLayout>
  );
}

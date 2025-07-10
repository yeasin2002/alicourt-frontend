import { CalendarEvents } from "@/components/dashboard/calendar-events";
import { CalendarGrid } from "@/components/dashboard/calendar-grid";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useState } from "react";

export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateSelect = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <CalendarGrid onDateSelect={handleDateSelect} />
        </div>

        {/* Events Section */}
        <div className="border-t border-gray-200 bg-gray-50">
          <CalendarEvents selectedDate={selectedDate} />
        </div>
      </div>
    </DashboardLayout>
  );
}

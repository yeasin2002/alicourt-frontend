

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  time: string;
  type: "chat" | "text" | "meeting";
}

interface CalendarGridProps {
  events?: CalendarEvent[];
  onDateSelect?: (date: Date | null) => void;
  selectedDate?: Date | null;
}

export function CalendarGrid({
  events = [],
  onDateSelect,
  selectedDate,
}: CalendarGridProps) {
  const [date, setDate] = useState<Value>(selectedDate || new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  // Update internal state when selectedDate prop changes
  useEffect(() => {
    if (selectedDate) {
      setDate(selectedDate);
      setCurrentMonth(selectedDate);
    }
  }, [selectedDate]);

  // Function to check if a date has events
  const hasEvents = (date: Date) => {
    return events.some(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  // Function to get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  // Handle date change
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    if (newDate instanceof Date) {
      onDateSelect?.(newDate);
    } else if (Array.isArray(newDate) && newDate[0]) {
      onDateSelect?.(newDate[0]);
    }
  };

  // Custom tile content to show event indicators
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && hasEvents(date)) {
      const dayEvents = getEventsForDate(date);
      return (
        <div className="flex flex-wrap gap-1 mt-1">
          {dayEvents.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              title={event.title}
            />
          ))}
          {dayEvents.length > 2 && (
            <div className="text-xs text-purple-600 font-medium">
              +{dayEvents.length - 2}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Custom tile class names for styling
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const classes = [];

    if (view === "month") {
      // Highlight today
      if (date.toDateString() === new Date().toDateString()) {
        classes.push("today");
      }

      // Highlight dates with events
      if (hasEvents(date)) {
        classes.push("has-events");
      }
    }

    return classes.join(" ");
  };

  const formatMonthYear = (_locale: string | undefined, date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const handleActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date | null;
  }) => {
    if (activeStartDate) {
      setCurrentMonth(activeStartDate);
    }
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
    setCurrentMonth(newDate);
  };

  return (
    <div className="bg-white h-full">
      {/* Custom Calendar Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">
          {formatMonthYear(undefined, currentMonth)}
        </h1>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => navigateMonth("prev")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => navigateMonth("next")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* React Calendar */}
      <div className="p-6">
        <Calendar
          onChange={handleDateChange}
          value={date}
          activeStartDate={currentMonth}
          onActiveStartDateChange={handleActiveStartDateChange}
          view="month"
          showNavigation={false}
          tileContent={tileContent}
          tileClassName={tileClassName}
          className="custom-calendar"
          formatShortWeekday={(_locale, date) => {
            const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            return days[date.getDay()];
          }}
        />
      </div>

      <style scoped>{`
        .custom-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
        }

        .custom-calendar .react-calendar__navigation {
          display: none;
        }

        .custom-calendar .react-calendar__month-view__weekdays {
          background-color: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        }

        .custom-calendar .react-calendar__month-view__weekdays__weekday {
          padding: 1rem;
          font-weight: 500;
          color: #374151;
          text-align: center;
          border-right: 1px solid #e5e7eb;
        }

        .custom-calendar
          .react-calendar__month-view__weekdays__weekday:last-child {
          border-right: none;
        }

        .custom-calendar .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none;
        }

        .custom-calendar .react-calendar__tile {
          height: 80px;
          border: 1px solid #e5e7eb;
          border-top: none;
          border-left: none;
          background: white;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
          transition: background-color 0.2s;
          cursor: pointer;
        }

        .custom-calendar .react-calendar__tile:hover {
          background-color: #f9fafb;
        }

        .custom-calendar .react-calendar__tile--now {
          background-color: #fef3c7;
        }

        .custom-calendar .react-calendar__tile--now:hover {
          background-color: #fde68a;
        }

        .custom-calendar .react-calendar__tile--active {
          background-color: #ddd6fe !important;
          color: #5b21b6;
        }

        .custom-calendar .react-calendar__tile--active:hover {
          background-color: #c4b5fd !important;
        }

        .custom-calendar .react-calendar__tile.has-events {
          background-color: #faf5ff;
        }

        .custom-calendar .react-calendar__tile.has-events:hover {
          background-color: #f3e8ff;
        }

        .custom-calendar
          .react-calendar__month-view__days__day--neighboringMonth {
          color: #9ca3af;
        }

        .custom-calendar .react-calendar__tile abbr {
          font-size: 1.125rem;
          font-weight: 500;
          color: #111827;
        }

        .custom-calendar
          .react-calendar__month-view__days__day--neighboringMonth
          abbr {
          color: #9ca3af;
        }

        .custom-calendar .react-calendar__month-view__days {
          border-left: 1px solid #e5e7eb;
        }

        .custom-calendar .react-calendar__tile:last-child {
          border-right: 1px solid #e5e7eb;
        }

        .custom-calendar .react-calendar__month-view__days__day:nth-child(7n) {
          border-right: 1px solid #e5e7eb;
        }
      `}</style>
    </div>
  );
}

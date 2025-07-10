import { dateToTimeNormalize } from "@/lib/date-time-normalize";
import { ExternalLink } from "lucide-react";
import { CreatePlanEvent } from "./create-plan-event";

interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  time: string;
  type: "chat" | "text" | "meeting";
}

interface Props extends React.ComponentProps<"div"> {
  selectedDate: Date;
}

export function CalendarEvents({ selectedDate }: Props) {
  const event: CalendarEvent[] = [
    {
      id: "1",
      date: new Date(2024, 2, 15),
      title: "untitled plan( Chat )",
      time: "FRI At 09:00Pm",
      type: "chat",
    },
    {
      id: "2",
      date: new Date(2024, 2, 15),
      title: "untitled plan( Text )",
      time: "FRI At 09:00Pm",
      type: "text",
    },
  ];

  const filteredEvents = event;
  // const filteredEvents = selectedDate
  //   ? event.filter(
  //       (event) => event.date.toDateString() === selectedDate.toDateString()
  //     )
  //   : event;

  return (
    <div className="p-6 space-y-4">
      {selectedDate && (
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            Events for {dateToTimeNormalize(selectedDate)}
          </h3>
          <CreatePlanEvent />
        </div>
      )}

      {filteredEvents.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            {selectedDate
              ? "No events scheduled for this date"
              : "No events to display"}
          </p>
        </div>
      ) : (
        filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center space-x-4 bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Date Badge */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold">{event.date.getDate()}</span>
            </div>

            {/* Event Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-lg truncate">
                {event.title}
              </h3>
              <p className="text-gray-600">{event.time}</p>
              <div className="flex items-center mt-1">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === "chat"
                      ? "bg-blue-100 text-blue-800"
                      : event.type === "text"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {event.type}
                </span>
              </div>
            </div>

            {/* Action Icon */}
            <div className="text-purple-600 flex-shrink-0">
              <ExternalLink className="h-5 w-5" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

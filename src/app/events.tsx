"use client";
import { useMemo, useState } from "react";
import { EventCalendar } from "@/components/ui/event-calendar";
import { Event } from "@/types";

export function Events({ events }: { events: Event[] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentMonthEvents = useMemo(
    () =>
      events.filter(
        ({ date }) =>
          date.getMonth() === currentMonth.getMonth() &&
          date.getUTCFullYear() === currentMonth.getUTCFullYear(),
      ),
    [events, currentMonth],
  );

  return (
    <div className="mt-4 shadow-lg space-x-2 flex flex-row rounded-2xl p-4 pl-2 border">
      <EventCalendar
        mode="multiple"
        selected={events.map((e) => e.date)}
        onMonthChange={(e) => setCurrentMonth(e)}
      />

      {currentMonthEvents.length > 0 && (
        <div className="mt-12">
          <h3 className="mb-1">
            Events in{" "}
            <span className="font-medium">
              {currentMonth.toLocaleString("en-GB", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </h3>

          <ul className="list-disc list-inside">
            {currentMonthEvents.map((event, i) => (
              <li key={i} className="mb-1">
                <span>{event.title}</span>
                <small className="block leading-none">
                  {event.date.toLocaleDateString("pl-PL")}
                </small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

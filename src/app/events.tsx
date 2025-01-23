"use client";
import { EventCalendar } from "@/components/ui/event-calendar";
import { Event, Seminar } from "@/types";
import { useWindowSize } from "usehooks-ts";

const displayPorts = [
  { from: 0, to: 650, months: 1 },
  { from: 650, to: 850, months: 2 },
  { from: 850, to: 1020, months: 3 },
  { from: 1020, to: 1280, months: 1 },
  { from: 1280, to: Infinity, months: 2 },
];

export function Events({ events }: { events: Seminar[] }) {
  const { width = 0 } = useWindowSize();

  return (
    <EventCalendar
      className="shadow-lg rounded-2xl p-4 border flex justify-center"
      mode="multiple"
      numberOfMonths={displayPorts.find((port) => width >= port.from && width < port.to)?.months}
      selected={events.map((e) => e.start_date)}
    />
  );
}

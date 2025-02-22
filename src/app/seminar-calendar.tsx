"use client";

import { useWindowSize } from "usehooks-ts";

import { EventCalendar } from "@/components/ui/event-calendar";
import type { Seminar } from "@/types";

export function SeminarCalendar({ seminars }: { seminars: Seminar[] }) {
  const { width = 2000 } = useWindowSize();

  return (
    <EventCalendar
      className="relative z-10 flex justify-center rounded-2xl border p-4 shadow-lg"
      mode="multiple"
      numberOfMonths={width > 640 ? 2 : 1}
      selected={seminars.map((seminar) => seminar.start_date)}
      showOutsideDays={false}
      weekStartsOn={1}
    />
  );
}

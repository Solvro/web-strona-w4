"use client";

import { useWindowSize } from "usehooks-ts";

import { EventCalendar } from "@/components/ui/event-calendar";
import { Seminar } from "@/types";

export function SeminarCalendar({ seminars }: { seminars: Seminar[] }) {
  const { width = 2000 } = useWindowSize();

  return (
    <EventCalendar
      className="shadow-lg rounded-2xl p-4 border flex justify-center w-full"
      mode="multiple"
      numberOfMonths={width > 640 ? 2 : 1}
      selected={seminars.map((e) => e.start_date)}
      showOutsideDays={false}
      weekStartsOn={1}
    />
  );
}

"use client";

import { useWindowSize } from "usehooks-ts";

import { type CarouselApi } from "@/components/ui/carousel";
import { EventCalendar } from "@/components/ui/event-calendar";
import type { Seminar } from "@/types";

export function SeminarCalendar({
  seminars,
  carouselApi,
}: {
  seminars: Seminar[];
  carouselApi: CarouselApi | null;
}) {
  const { width = 2000 } = useWindowSize();

  return (
    <EventCalendar
      className="relative z-10 flex justify-center rounded-2xl border bg-white p-4 shadow-lg dark:bg-black"
      mode="multiple"
      numberOfMonths={width > 640 ? 2 : 1}
      selected={seminars.map((seminar) => seminar.start_date)}
      showOutsideDays={false}
      weekStartsOn={1}
      onDayClick={(day) => {
        const index = seminars.findIndex(
          (seminar) =>
            seminar.start_date.toLocaleDateString() ===
            day.toLocaleDateString(),
        );

        if (index !== -1 && carouselApi) carouselApi.scrollTo(index);
      }}
    />
  );
}

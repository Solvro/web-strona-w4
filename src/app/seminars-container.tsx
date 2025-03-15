"use client";

import { useState } from "react";

import type { CarouselApi } from "@/components/ui/carousel";
import type { Seminar } from "@/types";

import { SeminarCalendar } from "./seminar-calendar";
import { Seminars } from "./seminars";

export function SeminarsContainer({ seminars }: { seminars: Seminar[] }) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  return (
    <div className="mx-auto mt-6 flex w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <Seminars seminars={seminars} setCarouselApi={setCarouselApi} />
      <SeminarCalendar seminars={seminars} carouselApi={carouselApi} />
    </div>
  );
}

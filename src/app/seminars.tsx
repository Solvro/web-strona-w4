import { BlurredCircle } from "@/components/blurred-circle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { env } from "@/env";
import { truncate } from "@/lib/truncate";
import type { Seminar } from "@/types";

import { SeminarCalendar } from "./seminar-calendar";
import { SeminarShortcut } from "./seminar-shortcut";

export async function Seminars() {
  const response = await fetch(env.API_EVENTS_URL);
  //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, unicorn/no-await-expression-member
  const seminars: Seminar[] = (await response.json())?.events.map(
    (seminar: Seminar) => {
      seminar.start_date = new Date(seminar.start_date);
      return seminar;
    },
  );

  if (seminars.length <= 0) {
    return null;
  }
  return (
    <div className="mx-auto mt-6 flex w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <div className="relative max-w-full">
        <Carousel className="relative z-10 w-full rounded-2xl bg-brand px-4 py-6 text-white">
          <CarouselPrevious />

          <CarouselContent>
            {seminars.map((seminar, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <h4
                    className="mb-1.5 text-center text-xl font-medium"
                    dangerouslySetInnerHTML={{ __html: seminar.title }}
                  >
                    {/* {seminar.title} */}
                  </h4>

                  {seminar.description ? (
                    <p
                      className="text-sm leading-tight opacity-80"
                      dangerouslySetInnerHTML={{
                        __html: truncate(seminar.description, 300),
                      }}
                    ></p>
                  ) : null}

                  <div className="mt-4 pb-6 text-base font-semibold leading-snug">
                    <p>
                      {seminar.start_date.toLocaleString("pl-PL", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </p>
                    <p>{seminar.venue.venue}</p>
                  </div>
                </div>

                {/* <SeminarShortcut seminar={seminar} key={index} /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <BlurredCircle />
      </div>

      <SeminarCalendar seminars={seminars} />
    </div>
  );
}

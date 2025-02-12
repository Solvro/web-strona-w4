import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Seminar } from "@/types";
import { env } from "@/env";

import { SeminarCalendar } from "./SeminarCalendar";
import { BlurredCircle } from "@/components/BlurredCircle";

export async function Seminars() {
  const response = await fetch(env.API_EVENTS_URL);
  const seminars: Seminar[] = (await response.json())["events"].map((seminar: Seminar) => {
    seminar.start_date = new Date(seminar.start_date);
    return seminar;
  });

  const truncate = (text: string, maxLength: number) => {
    const l = text.length;
    let result = text.replace(/<[^>]*>/g, "").substring(0, maxLength);
    if (l > maxLength) result += "...";

    return result;
  };

  if (seminars.length <= 0) return null;
  return (
    <div className="mt-6 w-full mx-auto flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="relative max-w-full">
        <Carousel className="bg-brand text-white px-4 py-6 w-full rounded-2xl relative z-10">
          <CarouselPrevious />

          <CarouselContent>
            {seminars.map((seminar, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <h4 className="font-medium text-xl text-center mb-1.5">{seminar.title}</h4>

                  {seminar.description && (
                    <p
                      className="opacity-80 text-sm leading-tight"
                      dangerouslySetInnerHTML={{
                        __html: truncate(seminar.description, 300),
                      }}
                    ></p>
                  )}

                  <div className="mt-4 text-base font-semibold leading-snug pb-6">
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

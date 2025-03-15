import { BlurredCircle } from "@/components/blurred-circle";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { truncate } from "@/lib/truncate";
import type { Seminar } from "@/types";

export function Seminars({
  seminars,
  setCarouselApi,
}: {
  seminars: Seminar[];
  setCarouselApi: (api: CarouselApi) => void;
}) {
  if (seminars.length === 0) {
    return null;
  }

  // Sort seminars by date (ascending)
  seminars.sort((a, b) => a.start_date.getTime() - b.start_date.getTime());

  // Find index of first upcoming seminar
  const now = new Date();
  const nextSeminarIndex = seminars.findIndex(
    (seminar) => seminar.start_date > now,
  );

  // If all seminars are in the past, default to last seminar
  const startIndex =
    nextSeminarIndex === -1 ? seminars.length - 1 : nextSeminarIndex;

  return (
    <div className="relative max-w-full">
      <Carousel
        className="relative z-10 w-full rounded-2xl bg-brand px-4 py-6 text-white"
        startIndex={startIndex}
        setApi={(api: CarouselApi) => {
          setCarouselApi(api);
        }}
      >
        <CarouselPrevious />

        <CarouselContent>
          {seminars.map((seminar, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <h4
                  className="mb-1.5 text-center text-xl font-medium"
                  dangerouslySetInnerHTML={{ __html: seminar.title }}
                />

                {seminar.description ? (
                  <p
                    className="text-sm leading-tight opacity-80"
                    dangerouslySetInnerHTML={{
                      __html: truncate(seminar.description, 300),
                    }}
                  />
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
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>

      <BlurredCircle />
    </div>
  );
}

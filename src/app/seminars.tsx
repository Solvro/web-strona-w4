"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Event } from "@/types";

export function Seminars({ seminars }: { seminars: Event[] }) {
  if (!seminars.length) return null;
  return (
    <Carousel className="bg-brand text-white px-4 py-6 w-full rounded-2xl">
      <CarouselPrevious />

      <CarouselContent>
        {seminars.map((seminar, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <h4 className="font-medium text-xl text-center mb-1.5">{seminar.title}</h4>

              {seminar.description && (
                <p className="opacity-80 text-sm leading-tight">{seminar.description}</p>
              )}

              <div className="mt-4 text-base font-semibold leading-snug pb-6">
                <p>
                  {seminar.date.toLocaleString("pl-PL", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
                <p>{seminar.location}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}

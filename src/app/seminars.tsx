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
    <Carousel className="bg-brand mt-12 text-white px-4 py-6 rounded-2xl">
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
    // <div>
    //   <div className="bg-brand mt-12 text-white px-4 py-6 rounded-2xl flex flex-row items-center space-x-4">
    //     <button
    //       onClick={handlePrev}
    //       className="hover:bg-white/80 transition-all focus:ring-1 ring-white focus:outline-none ring-offset-1 bg-white/60 size-6 flex-shrink-0 rounded-full grid place-items-center"
    //     >
    //       <ChevronLeftIcon className="size-4 text-brand" />
    //     </button>
    //     <div className="flex-grow">
    // <h4 className="font-medium text-xl text-center mb-1.5">
    //   Seminar {selected.title}
    // </h4>

    // {selected.description && (
    //   <p className="opacity-80 text-sm leading-tight">
    //     {selected.description}
    //   </p>
    // )}

    // <div className="mt-4 text-base font-semibold leading-snug pb-6">
    //   <p>
    //     {selected.date.toLocaleString("pl-PL", {
    //       year: "numeric",
    //       month: "numeric",
    //       day: "numeric",
    //       hour: "numeric",
    //       minute: "numeric",
    //     })}
    //   </p>
    //   <p>{selected.location}</p>
    //       </div>
    //     </div>
    //     <button
    //       onClick={handleNext}
    //       className="hover:bg-white/80 transition-all focus:ring-1 ring-white focus:outline-none ring-offset-1 bg-white/60 size-6 flex-shrink-0 rounded-full grid place-items-center"
    //     >
    //       <ChevronLeftIcon className="size-4 text-brand transform rotate-180" />
    //     </button>
    //   </div>
    //   <div className="flex mt-2 flex-row items-center justify-center flex-wrap">
    //     {seminars.map((_, i) => (
    //       <button
    //         key={i}
    //         data-active={i === selectedIndex}
    //         disabled={i === selectedIndex}
    //         onClick={() => setSelectedIndex(i)}
    //         className="size-2 data-[active=true]:bg-brand bg-[#EDB3B3] mr-1.5 rounded-full"
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}

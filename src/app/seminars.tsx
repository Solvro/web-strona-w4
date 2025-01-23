"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Event, Seminar } from "@/types";
import { divIcon } from "leaflet";
import { useState, useEffect } from "react";
import { Events } from "./events";


export function Seminars() {
    const [seminars, setSeminars] = useState<Seminar[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_REST_API_EVENTS_URL ?? ""); // Replace API_URL with your WordPress REST API endpoint
                if (!response.ok) {
                    throw new Error(`Error fetching members: ${response.statusText}`);
                }
                const data = await response.json();
                
                let result = [];
                for (const event of data['events']) {
                    event.start_date = new Date(event.start_date);
                    result.push(event);
                }
                // setSeminars(result);
                // console.log(data);

                setSeminars(result);
            } catch (err) {
                setError((err as any).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    const truncate = (text: string, maxLength: number) => {
        let l = text.length;
        let result = text.replace(/<[^>]*>/g, '').substring(0, maxLength);
        if (l > maxLength) result += "...";

        return result;
    };


    if (seminars.length <= 0) return null;
    return (
        <div className="mt-6 w-full flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <Carousel className="bg-brand text-white px-4 py-6 w-full rounded-2xl">
                <CarouselPrevious />

                <CarouselContent>
                    {seminars.map((seminar, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <h4 className="font-medium text-xl text-center mb-1.5">{seminar.title}</h4>

                                {seminar.description && (
                                    <p className="opacity-80 text-sm leading-tight" dangerouslySetInnerHTML={{ __html: truncate(seminar.description, 300)}}></p>
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

            <Events events={seminars}></Events>
        </div>
    );
}

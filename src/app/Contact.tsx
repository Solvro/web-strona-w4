"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

const contactItems = [
  {
    icon: MapPinIcon,
    content: (
      <>
        Wyb. Wyspiańskiego 27
        <br />
        50-370 Wrocław
        <br />
        Sekretariat Katedry, p. 16/17 (C-3)
      </>
    ),
  },
  {
    icon: EnvelopeIcon,
    content: <a href="mailto:slk@ict.pwr.wroc.pl">slk@ict.pwr.wroc.pl</a>,
  },
  {
    icon: PhoneIcon,
    content: <a href="tel:+48713203200">+48 713 203 200</a>,
  },
];

export function Contact() {
  return (
    <section className="relative w-full" id="contact">
      <div className="relative flex flex-col lg:space-x-16 xl:space-x-20 lg:flex-row justify-between mx-auto py-20 max-w-screen-xl w-full px-4">
        <div className="flex-grow">
          <h2 className="section-header mb-10 md:!text-3xl">Contact</h2>
          <ul className="border bg-white dark:bg-transparent py-6 px-6 md:py-12 md:px-16">
            {contactItems.map((item, index) => (
              <li className="flex items-center mt-5 first-of-type:mt-0" key={index}>
                <item.icon className="size-6 md:size-8 shrink-0 opacity-60 stroke-2" />
                <p className="ml-4 sm:ml-6">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-full relative mt-12 lg:mt-0 overflow-hidden flex-shrink-0 h-[400px] aspect-[16/13] rounded-md shadow-md">
          <Map />
        </div>
      </div>
    </section>
  );
}

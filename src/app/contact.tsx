"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

const Map = dynamic(
  async () => import("./map").then((_module) => _module.Map),
  { ssr: false },
);

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
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col justify-between px-4 py-20 lg:flex-row lg:space-x-16 xl:space-x-20">
        <div className="flex-grow">
          <h2 className="section-header mb-10 md:!text-3xl">Contact</h2>
          <ul className="border bg-white px-6 py-6 dark:bg-transparent md:px-16 md:py-12">
            {contactItems.map((item, index) => (
              <li
                className="mt-5 flex items-center first-of-type:mt-0"
                key={index}
              >
                <item.icon className="size-6 shrink-0 stroke-2 opacity-60 md:size-8" />
                <p className="ml-4 sm:ml-6">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mt-12 aspect-[16/13] h-[400px] max-w-full flex-shrink-0 overflow-hidden rounded-md shadow-md lg:mt-0">
          <Map />
        </div>
      </div>
    </section>
  );
}

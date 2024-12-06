import { CSSProperties, FC } from "react";
import Image from "next/image";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { Map } from "./map";

import mountains from "@/assets/mountains.jpg";

const contactItems = [
  {
    icon: MapPinIcon,
    text: "Wyb. Wyspiańskiego 27<br>50-370 Wrocław<br>Sekretariat Katedry, p. 16/17 (C-3)",
  },
  {
    icon: EnvelopeIcon,
    text: "slk@ict.pwr.wroc.pl",
  },
  {
    icon: PhoneIcon,
    text: "+48 71 320 3200",
  },
];

export const ContactSection: FC = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 h-full w-full">
        <Image src={mountains} alt="Background banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#9d0620]/40" />
      </div>

      <div className="relative flex flex-col lg:space-x-16 xl:space-x-40 lg:flex-row justify-between mx-auto py-20 max-w-screen-xl w-full px-4">
        <div className="flex-grow">
          <h2
            className="section-header mb-10 !text-white md:!text-3xl"
            style={{ "--dash": "white" } as CSSProperties}
          >
            Contact
          </h2>
          <ul className="bg-[#f3f3f3]/20 border border-white rounded-xl py-6 px-6 md:py-12 md:px-16">
            {contactItems.map((item, index) => (
              <li className="flex items-center mt-5 first-of-type:mt-0" key={index}>
                <item.icon className="size-6 md:size-8 shrink-0 text-white" />
                <p
                  className="text-white font-bold ml-4 sm:ml-6"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-full mt-12 lg:mt-0 ring-4 ring-brand rounded-md overflow-hidden flex-shrink-0 h-[400px] aspect-square">
          <Map />
        </div>
      </div>
    </section>
  );
};

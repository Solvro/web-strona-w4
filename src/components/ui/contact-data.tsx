import { FC } from "react";
import Image from "next/image";
import phone from "@/assets/device-phone.svg";
import pin from "@/assets/pin.svg";
import mail from "@/assets/mail-1.svg";

const contactItems = [
  {
    icon: pin,
    text: "Wyb. Wyspiańskiego 2750-370 WrocławSekretariat Katedry, p. 16/17 (C-3)",
    alt: "Location pin icon",
  },
  {
    icon: mail,
    text: "slk@ict.pwr.wroc.pl",
    alt: "Mail icon",
  },
  {
    icon: phone,
    text: "+48 71 320 3200",
    alt: "Phone icon",
  },
];

export const ContactData: FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-[310px] min-w-[300px] max-w-[600px] w-full bg-[#F3F3F3]/20 border-white border-[2px] rounded-[20px] p-6 sm:p-12">
      {contactItems.map((item, index) => (
        <div
          className="flex items-center mt-4 sm:mt-6"
          key={index}
        >
          <Image src={item.icon} alt={item.alt} />
          <p className="text-white font-bold max-w-[80%] ml-4 sm:ml-6">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

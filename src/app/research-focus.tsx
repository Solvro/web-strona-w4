import Image from "next/image";

import { BlurredCircle } from "@/components/blurred-circle";
import { Slide } from "@/components/slide";

import researchFocusAsset from "../assets/research-focus.jpeg";

const elements = [
  {
    title: "Identification of Systems",
    description: [
      "statistical methods for the identification of systems",
      "identification of complex systems",
      "identification of non-linear dynamic systems",
      "non-parametric system identification",
    ],
  },
  {
    title: "Recogniton, Classification",
    description: [
      "statistical recognition methods",
      "non-parametric learning methods",
    ],
  },
  {
    title: "Optimization Theory and Techniques",
    description: [
      "network optimisation problems",
      "flow optimisation",
      "optimised packaging and cutting",
    ],
  },
];

export function ResearchFocus() {
  return (
    <div className="mt-24" id="education">
      <h2 className="section-header">Our Research Focus</h2>
      <div className="grid-cols-3 gap-8 md:grid lg:grid-cols-2">
        <div className="col-span-2 mt-8 sm:px-12 lg:col-span-1">
          {elements.map((element, index) => (
            <Slide
              key={index}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.2 * index,
              }}
              className="flex min-h-[120px] flex-row items-center space-x-8"
            >
              <div className="hidden size-20 flex-shrink-0 flex-row overflow-hidden sm:flex">
                <span className="-ml-10 font-poppins text-[100px] font-medium leading-none text-[#B8B8B8]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="mt-2 text-xl font-medium">{element.title}</h3>
                <ul className="list-outside list-disc text-sm">
                  {element.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            </Slide>
          ))}
        </div>
        <div className="relative hidden w-full max-w-96 self-center md:block">
          <Image
            src={researchFocusAsset}
            alt="Laboratory equipment"
            className="relative z-10 h-auto w-full rounded-md shadow-md"
          />
          <BlurredCircle />
        </div>
      </div>
    </div>
  );
}

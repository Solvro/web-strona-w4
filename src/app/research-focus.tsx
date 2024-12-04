import Image from "next/image";
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
    description: ["statistical recognition methods", "non-parametric learning methods"],
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
    <div className="mt-24">
      <h2 className="section-header">Our Research Focus</h2>
      <div className="md:grid grid-cols-3 lg:grid-cols-2 gap-8">
        <ul className="sm:px-12 mt-8 col-span-2 lg:col-span-1">
          {elements.map((element, index) => (
            <li className="flex flex-row space-x-8 items-center min-h-[120px]">
              <div className="hidden size-20 overflow-hidden sm:flex flex-row flex-shrink-0">
                <span className="text-[#B8B8B8] font-poppins text-[100px] leading-none -ml-10 font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium mt-2">{element.title}</h3>
                <ul className="text-sm list-outside list-disc">
                  {element.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <Image
          src={researchFocusAsset}
          alt="Laboratory equipment"
          className="hidden md:block w-full max-w-96 h-auto self-center"
        />
      </div>
    </div>
  );
}

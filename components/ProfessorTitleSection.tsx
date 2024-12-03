import * as React from "react";
import { Professor } from "@/types/types";
import Image from "next/image";

export function ProfessorTitleSection({ title, professors }: { title: string, professors: Professor[] }) {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-8">
      <div className="relative flex items-center w-full">
        <div className="flex-grow border-t border-black dark:border-white"></div>
        <span className="mx-4 text-center text-xl lg:text-2xl font-thin">{title}</span>
        <div className="flex-grow border-t border-black dark:border-white"></div>
      </div>
      <div className="w-full mt-4 flex flex-wrap justify-center items-center">
        {professors.map((professor, index) => (
          <div key={index} className="flex flex-col justify-center items-center px-3 mb-4">
            <Image
              src={professor.image || `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${professor.firstName}+${professor.lastName}`}
              alt={professor.lastName}
              width={100}
              height={100}
              className="w-16 h-16 lg:w-24 lg:h-24 object-cover rounded-full border-red-700 border-4"
            />
            <span className="text-base lg:text-lg font-bold mt-2 text-center">{professor.firstName} {professor.lastName}</span>
            <span className="text-sm lg:text-base text-center">{professor.titleSuffix ? professor.titleSuffix : ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

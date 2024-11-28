import { ChevronLeftIcon } from "@heroicons/react/16/solid";

import { Navbar } from "@/components/navbar";
import { AcademicTitlesOrder, getGeneralAcademicTitle } from "./titles-sorter";

// temporary static data, to be fetched from an API
const professors = [
  {
    firstName: "Ryszard",
    lastName: "Klempous",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    isActive: true,
  },
  {
    firstName: "Konrad",
    lastName: "Kluwak",
    titlePrefix: "dr inż.",
    isActive: true,
  },
  {
    firstName: "Grzegorz",
    lastName: "Mzyk",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    isActive: true,
  },
  {
    firstName: "Ewa",
    lastName: "Szlachcic",
    titlePrefix: "dr inż.",
    isActive: true,
  },
  {
    firstName: "Przemysław",
    lastName: "Śliwiński",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    isActive: true,
  },
  {
    firstName: "Paweł",
    lastName: "Wachel",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    role: "Kierownik Pracowni",
    isActive: true,
  },
  {
    firstName: "Maciej",
    lastName: "Filiński",
    titlePrefix: "mgr inż.",
    isActive: true,
  },
  {
    firstName: "Włodzimierz",
    lastName: "Greblicki",
    titlePrefix: "prof. dr hab. inż.",
    titleSuffix: "Professor Emeritus",
    isActive: false,
  },
  {
    firstName: "Zygmunt",
    lastName: "Hasiewicz",
    titlePrefix: "prof. dr hab. inż.",
    titleSuffix: "Professor Emeritus",
    isActive: false,
  },
  {
    firstName: "Barbara",
    lastName: "Łysakowska",
    titlePrefix: "dr inż.",
    isActive: true,
  },
  {
    firstName: "Jerzy",
    lastName: "Kotowski",
    titlePrefix: "dr inż.",
    isActive: true,
  },
];

const seminars = [
  {
    title: "Seminarium 1",
    date: new Date("2024-12-01T12:00"),
  },
  {
    title: "Seminarium 2",
    date: new Date("2024-12-01T12:00"),
  },
  {
    title: "Seminarium 3",
    date: new Date("2024-12-01T12:00"),
  },
  {
    title: "Seminarium 4",
    date: new Date("2024-12-01T12:00"),
  },
];

const professorsByTitle = Object.entries(
  professors.reduce(
    (acc, professor) => {
      if (!acc[professor.titlePrefix]) {
        acc[professor.titlePrefix] = [];
      }

      acc[professor.titlePrefix].push(professor);

      return acc;
    },
    {} as Record<string, typeof professors>,
  ),
).sort(
  (a, b) =>
    AcademicTitlesOrder.indexOf(getGeneralAcademicTitle(a[0])) -
    AcademicTitlesOrder.indexOf(getGeneralAcademicTitle(b[0])),
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="max-w-screen-lg mx-auto w-full px-4 mt-12 grid gap-14 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-black text-brand">
              Department of Control Systems and Mechatronics
            </h1>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              natus quos minus esse necessitatibus deserunt tempora voluptate
              possimus sapiente commodi asperiores similique, aspernatur iusto
              earum, pariatur quis dolores id porro.
            </p>

            {seminars.length > 0 && (
              <div className="bg-brand mt-12 text-white px-4 py-6 rounded-2xl flex flex-row items-center space-x-4">
                <button className="hover:bg-white/80 transition-all focus:ring ring-white focus:outline-none ring-offset-1 bg-white/60 size-6 flex-shrink-0 rounded-full grid place-items-center">
                  <ChevronLeftIcon className="size-4 text-brand" />
                </button>
                <div className="flex-grow">
                  <h4 className="font-medim text-xl text-center mb-1.5">
                    Seminar XYZ with prof. XYZ
                  </h4>
                  <p className="opacity-80 text-sm leading-tight">
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias natus quos minus esse necessitatibus deserunt tempora
                    voluptate
                  </p>

                  <div className="mt-4 text-base font-semibold leading-snug pb-6">
                    <p>01.12.2024 12:00</p>
                    <p>Sala wykładowa 203, Bud. B3</p>
                  </div>
                </div>
                <button className="hover:bg-white/80 transition-all focus:ring ring-white focus:outline-none ring-offset-1 bg-white/60 size-6 flex-shrink-0 rounded-full grid place-items-center">
                  <ChevronLeftIcon className="size-4 text-brand transform rotate-180" />
                </button>
              </div>
            )}
          </div>

          <div className="mt-4 md:mt-16">
            {professorsByTitle.map(([groupName, members], i) => (
              <div key={i} className="mx-auto max-w-screen-sm w-full">
                <div className="flex flex-row items-center">
                  <div className="h-[1px] w-full bg-stone-500" />

                  <span className="text-nowrap mx-5 text-lg text-stone-500">
                    {groupName}
                  </span>

                  <div className="h-[1px] w-full bg-stone-500" />
                </div>
                <ul className="mt-3 mb-6 flex flex-row gap-3 justify-center flex-wrap">
                  {members.map((member, j) => (
                    <li key={j}>
                      <div className="mx-auto text-center w-[100px] flex-shrink">
                        <div className="size-14 border-[3px] mx-auto mb-1 border-brand rounded-full">
                          <img
                            src={`https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.firstName}+${member.lastName}`}
                            alt=""
                            className="rounded-full size-full"
                          />
                        </div>
                        <p className="text-sm block font-medium mt-2 leading-none">
                          {member.firstName} {member.lastName}
                        </p>
                        {member.titleSuffix && (
                          <em className="text-sm text-gray-600 block leading-none">
                            {member.titleSuffix}
                          </em>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

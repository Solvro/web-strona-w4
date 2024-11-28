import { Navbar } from "@/components/navbar";
import { Event } from "@/types";

import { AcademicTitlesOrder, getGeneralAcademicTitle } from "./titles-sorter";
import { Seminars } from "./seminars";
import { Events } from "./events";

// temporary static data, to be fetched from an API
const professors = [
  {
    firstName: "Ryszard",
    lastName: "Klempous",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image:
      "https://0.academia-photos.com/50234834/16584101/16901902/s200_ryszard.klempous.jpg",
    isActive: true,
  },
  {
    firstName: "Konrad",
    lastName: "Kluwak",
    titlePrefix: "dr inż.",
    image:
      "https://i1.wp.com/konrad.kluwak.staff.iiar.pwr.edu.pl/wp-content/uploads/2019/04/IMG_6208-1.jpg?w=1050",
    isActive: true,
  },
  {
    firstName: "Grzegorz",
    lastName: "Mzyk",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image: "http://staff.iiar.pwr.wroc.pl/grzegorz.mzyk/gmusa.jpg",
    isActive: true,
  },
  {
    firstName: "Ewa",
    lastName: "Szlachcic",
    titlePrefix: "dr inż.",
    image:
      "http://ewa.szlachcic.staff.iiar.pwr.wroc.pl/index_pliki/image003.jpg",
    isActive: true,
  },
  {
    firstName: "Przemysław",
    lastName: "Śliwiński",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image:
      "http://diuna.ict.pwr.wroc.pl/sliwinski/Przemysław%20Śliwiński%20-%20Official%20Home%20Page_pliki/sliwinski-72dpi.jpg",
    isActive: true,
  },
  {
    firstName: "Paweł",
    lastName: "Wachel",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image: "http://pawel.wachel.staff.iiar.pwr.wroc.pl/images/img0006.jpg",
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
    image: "http://diuna.iiar.pwr.edu.pl/greblicki/ICONS/wgre.jpg",
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

const seminars: Event[] = [
  {
    title: "Seminarium 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus quos minus esse necessitatibus deserunt tempora voluptate possimus sapiente commodi asperiores similique, aspernatur iusto earum, pariatur quis dolores id porro.",
    date: new Date("2024-12-01T12:00"),
    location: "Online",
  },
  {
    title: "Seminarium 2",
    date: new Date("2024-12-01T12:00"),
    location: "Sala 311d, bud. D-2",
  },
  {
    title: "Seminarium 3",
    date: new Date("2024-12-01T12:00"),
    location: "Sala wykładowa 103, bud. C-7",
  },
  {
    title: "Seminarium 4",
    date: new Date("2024-12-01T12:00"),
    location: "Sala 311d, bud. D-2",
  },
];

const events: Event[] = seminars.concat([
  {
    title: "Coś",
    date: new Date(2024, 10, 11),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    location: "Online",
  },
]);

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

      <main className="pb-32">
        <div className="max-w-screen-lg mx-auto w-full px-4 mt-12 grid gap-14 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold text-brand">
              Department of Control Systems and Mechatronics
            </h1>

            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              natus quos minus esse necessitatibus deserunt tempora voluptate
              possimus sapiente commodi asperiores similique, aspernatur iusto
              earum, pariatur quis dolores id porro.
            </p>

            <Seminars seminars={seminars} />

            <Events events={events} />
          </div>

          <div className="mt-4 md:mt-0">
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
                            src={
                              member.image ||
                              `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.firstName}+${member.lastName}`
                            }
                            alt=""
                            className="rounded-full size-full object-cover"
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

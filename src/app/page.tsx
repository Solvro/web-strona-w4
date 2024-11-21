import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { SeminarShortcut } from "./seminar-shortcut";

export default function Home() {
  // temporary static data, to be fetched from an API
  const professors = [
    {
      firstName: "Ryszard",
      lastName: "Klempous",
      titlePrefix: "dr hab. inż.",
      titleSuffix: "prof. ucz.",
      isActive: true,
    },
    { firstName: "Konrad", lastName: "Kluwak", titlePrefix: "dr inż.", isActive: true },
    {
      firstName: "Grzegorz",
      lastName: "Mzyk",
      titlePrefix: "dr hab. inż.",
      titleSuffix: "prof. ucz.",
      isActive: true,
    },
    { firstName: "Ewa", lastName: "Szlachcic", titlePrefix: "dr inż.", isActive: true },
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
    { firstName: "Maciej", lastName: "Filiński", titlePrefix: "mgr inż.", isActive: true },
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
    { firstName: "Barbara", lastName: "Łysakowska", titlePrefix: "dr inż.", isActive: true },
    { firstName: "Jerzy", lastName: "Kotowski", titlePrefix: "dr inż.", isActive: true },
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

  return (
    <>
      <Navbar />

      <main>
        <div className="max-w-screen-lg mx-auto w-full px-4 mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-black text-brand">Pracownia Systemów Cyberfizycznych</h1>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natus quos minus esse
              necessitatibus deserunt tempora voluptate possimus sapiente commodi asperiores
              similique, aspernatur iusto earum, pariatur quis dolores id porro.
            </p>

            {seminars.length > 0 && (
              <div>
                <h2 className="mt-8 text-2xl font-bold text-brand">Nadchodzące seminaria</h2>
                <div className="space-y-1 mt-1">
                  {seminars.slice(0, 3).map((seminar, i) => (
                    <SeminarShortcut seminar={seminar} key={i} />
                  ))}
                </div>
                {seminars.length > 3 && (
                  <Link
                    href="/seminaria"
                    className="text-stone-600 text-sm mt-2 mx-auto w-max underline decoration-dotted hover:text-brand block text-center font-light"
                  >
                    zobacz wszystkie seminaria
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="mt-4 md:mt-0 grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))]">
            {professors.map((professor, i) => (
              <Link
                href={`/professor/${professor.firstName}-${professor.lastName}`}
                key={i}
                className="text-center hover:bg-stone-100 rounded-md py-3"
              >
                <div className="size-20 p-0.5 border-[3px] border-brand rounded-full mx-auto mb-1">
                  <img
                    src={`https://ui-avatars.com/api/?background=cf6967&color=fff&name=${professor.firstName}+${professor.lastName}`}
                    alt=""
                    className="rounded-full size-full"
                  />
                </div>
                <small className="block">{professor.titlePrefix}</small>
                <p className="block leading-5">
                  {professor.firstName} {professor.lastName}
                </p>
                {professor.titleSuffix && <small className="block">{professor.titleSuffix}</small>}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

import { Navbar } from "@/components/Navbar";
import Link from "next/link";

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

  return (
    <>
      <Navbar />

      <main>
        <div className="max-w-screen-lg mx-auto w-full px-4 mt-12 grid md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-black text-brand">Pracownia Systemów Cyberfizycznych</h1>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natus quos minus esse
              necessitatibus deserunt tempora voluptate possimus sapiente commodi asperiores
              similique, aspernatur iusto earum, pariatur quis dolores id porro.
            </p>
          </div>

          <div className="mt-12 md:mt-0 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4">
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

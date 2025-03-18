import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollDown } from "@/components/scroll-down";
import { env } from "@/env";
import type { Seminar } from "@/types";

import { Contact } from "./contact";
import { OurTeam } from "./our-team";
import { ResearchFocus } from "./research-focus";
import { SeminarsContainer } from "./seminars-container";

export const revalidate = 3600;

export default async function Home() {
  const response = await fetch(
    `${env.API_EVENTS_URL}?start_date=${(new Date().getFullYear() - 1).toString()}`,
  );

  const json = (await response.json()) as { events: Seminar[] };
  const seminars: Seminar[] = json.events.map((seminar: Seminar) => ({
    ...seminar,
    start_date: new Date(seminar.start_date),
  }));

  return (
    <>
      <Navbar />

      <main className="mx-auto mt-12 w-full max-w-screen-xl px-4 pb-32">
        <div className="w-full">
          <div>
            <h1 className="text-4xl font-semibold text-brand">
              Cyber-physical Systems Group
            </h1>

            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              natus quos minus esse necessitatibus deserunt tempora voluptate
              possimus sapiente commodi asperiores similique, aspernatur iusto
              earum, pariatur quis dolores id porro.
            </p>
          </div>

          <SeminarsContainer seminars={seminars} />
        </div>

        <OurTeam />

        <ScrollDown destination="#contact" />

        <ResearchFocus />
      </main>

      <Contact />

      <Footer />
    </>
  );
}

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollDown } from "@/components/scroll-down";

import { Contact } from "./contact";
import { OurTeam } from "./our-team";
import { ResearchFocus } from "./research-focus";
import { Seminars } from "./seminars";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto mt-12 w-full max-w-screen-xl px-4 pb-32">
        <div className="w-full">
          <div>
            <h1 className="text-4xl font-semibold text-brand">
              Cyberphysical Systems Laboratory
            </h1>

            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              natus quos minus esse necessitatibus deserunt tempora voluptate
              possimus sapiente commodi asperiores similique, aspernatur iusto
              earum, pariatur quis dolores id porro.
            </p>
          </div>

          <Seminars />
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

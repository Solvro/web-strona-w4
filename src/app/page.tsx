import { Navbar } from "@/components/Navbar";
import { Seminars } from "./Seminars";
import { OurTeam } from "./OurTeam";
import { ResearchFocus } from "./ResearchFocus";
import { Contact } from "./Contact";
import Footer from "@/components/Footer";
import { ScrollDown } from "@/components/ScrollDown";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pb-32 max-w-screen-xl mx-auto w-full px-4 mt-12">
        <div className="w-full">
          <div>
            <h1 className="text-4xl font-semibold text-brand">Cyberphysical Systems Laboratory</h1>

            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natus quos minus esse
              necessitatibus deserunt tempora voluptate possimus sapiente commodi asperiores
              similique, aspernatur iusto earum, pariatur quis dolores id porro.
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

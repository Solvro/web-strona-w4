import { Navbar } from "@/components/Navbar";
import { Seminars } from "./seminars";
import { OurTeam } from "./our-team";
import { ResearchFocus } from "./research-focus";
import { Contact } from "./contact";

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

          {/* <div className="mt-6 w-full flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4"> */}
          <Seminars />
          {/* <Events events={events} /> */}
          {/* </div> */}
        </div>

        <OurTeam />

        <ResearchFocus />
      </main>

      <Contact />
      <footer className="text-center font-poppins py-10">Made with ❤️ by Solvro ©</footer>
    </>
  );
}

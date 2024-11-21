import Link from "next/link";
import { Doto } from "next/font/google";

const doto = Doto({
  subsets: ["latin"],
});

export function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-xl mx-auto w-full px-4 py-4 flex flex-row items-center justify-between space-x-2">
        <Link
          href="/"
          className={`${doto.className} text-brand font-black text-4xl hover:bg-stone-50 transition-all px-3 py-1 rounded-md`}
        >
          DIUNA
        </Link>

        <div className="hidden relative border w-full max-w-md sm:flex flex-row items-center text-stone-500 justify-start bg-white rounded-sm text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 z-10 pointer-events-none mr-1 absolute left-2 top-1/2 transform -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Szukaj"
            className="w-full pl-7 py-2 outline-none bg-transparent focus:ring-1 ring-brand rounded-sm pr-3"
          />
        </div>

        <div className="flex flex-row items-center space-x-2">
          <Link
            href="/search"
            className="sm:hidden py-2 px-2 border hover:bg-stone-100 focus:ring-1 ring-brand rounded-sm"
            title="Szukaj"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-stone-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>

          <Link
            href="/login"
            className="py-2 border flex flex-row flex-nowrap items-center border-brand hover:text-white hover:bg-brand transition-all font-medium px-5 text-brand bg-white rounded-sm text-xs shadow shadow-brand/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mr-1 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            <span className="text-nowrap">Zaloguj się</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

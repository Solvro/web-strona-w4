"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { google, ics, outlook } from "calendar-link";
import { useState } from "react";

export function SeminarShortcut({
  seminar,
}: {
  seminar: { title: string; start_date: Date };
}) {
  const [isShowPicker, setIsShowPicker] = useState(false);

  const calendarProviders = [
    {
      name: "Google",
      icon: GoogleCalendarIcon,
      provider: google,
    },
    {
      name: "Outlook",
      icon: OutlookIcon,
      provider: outlook,
    },
    { name: "ICS", provider: ics },
  ];

  return (
    <>
      <div className="flex flex-col flex-nowrap justify-between rounded-md border border-brand bg-brand px-3 py-3 text-white sm:flex-row sm:items-center sm:rounded-full sm:pl-4">
        <div>
          <h3 className="font-semibold leading-none">{seminar.title}</h3>
          <p className="text-xs opacity-90">
            {seminar.start_date.toLocaleString("pl-PL", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <button
          onClick={() => setIsShowPicker(true)}
          className="mt-2 flex w-full flex-row items-center text-nowrap rounded-full bg-white px-3 py-2 text-xs font-semibold text-brand transition-all hover:bg-white/90 sm:mt-0 sm:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 inline size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          Dodaj do kalendarza
        </button>
      </div>

      <Dialog
        open={isShowPicker}
        onClose={setIsShowPicker}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 sm:mx-0 sm:size-10">
                    <CalendarDaysIcon className="size-6 text-brand" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Dodaj seminarium do kalendarza
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Dodaj <strong>{seminar.title}</strong>, które odbędzie
                        się: <br />
                        <strong>
                          {seminar.start_date.toLocaleDateString("pl-PL")}
                        </strong>{" "}
                        o godzinie{" "}
                        <strong>
                          {seminar.start_date.toLocaleTimeString("pl-PL", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </strong>{" "}
                        do swojego kalendarza.
                      </p>

                      <div className="mt-2 space-y-1">
                        {calendarProviders.map((provider, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              window.open(
                                provider.provider({
                                  title: seminar.title,
                                  start: seminar.start_date,
                                }),
                              )
                            }
                            className="flex w-full flex-row items-center justify-between rounded-md border p-2"
                          >
                            <div className="flex flex-row items-center dark:text-black">
                              <div className="grid size-8 place-items-center">
                                {provider.icon?.()}
                              </div>
                              <span className="ml-4">{provider.name}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setIsShowPicker(false)}
                  className="mt-3 block w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                >
                  Zamknij
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function OutlookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
    >
      <path
        d="M19.484,7.937v5.477L21.4,14.619a.489.489,0,0,0,.21,0l8.238-5.554a1.174,1.174,0,0,0-.959-1.128Z"
        style={{ fill: "#0072c6" }}
      />
      <path
        d="M19.484,15.457l1.747,1.2a.522.522,0,0,0,.543,0c-.3.181,8.073-5.378,8.073-5.378V21.345a1.408,1.408,0,0,1-1.49,1.555H19.483V15.457Z"
        style={{ fill: "#0072c6" }}
      />
      <path
        d="M10.44,12.932a1.609,1.609,0,0,0-1.42.838,4.131,4.131,0,0,0-.526,2.218A4.05,4.05,0,0,0,9.02,18.2a1.6,1.6,0,0,0,2.771.022,4.014,4.014,0,0,0,.515-2.2,4.369,4.369,0,0,0-.5-2.281A1.536,1.536,0,0,0,10.44,12.932Z"
        style={{ fill: "#0072c6" }}
      />
      <path
        d="M2.153,5.155V26.582L18.453,30V2ZM13.061,19.491a3.231,3.231,0,0,1-2.7,1.361,3.19,3.19,0,0,1-2.64-1.318A5.459,5.459,0,0,1,6.706,16.1a5.868,5.868,0,0,1,1.036-3.616A3.267,3.267,0,0,1,10.486,11.1a3.116,3.116,0,0,1,2.61,1.321,5.639,5.639,0,0,1,1,3.484A5.763,5.763,0,0,1,13.061,19.491Z"
        style={{ fill: "#0072c6" }}
      />
    </svg>
  );
}

function GoogleCalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Livello_1"
      x="0px"
      y="0px"
      viewBox="0 0 200 200"
      enableBackground="new 0 0 200 200"
      width={28}
      height={28}
    >
      <g>
        <g transform="translate(3.75 3.75)">
          <path
            fill="#FFFFFF"
            d="M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579    l5.263-53.947L148.882,43.618z"
          />
          <path
            fill="#1A73E8"
            d="M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342    c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026    s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487    c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276    l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145    c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184    c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211    s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421    C73.408,129.263,69.145,127.934,65.211,125.276z"
          />
          <path
            fill="#1A73E8"
            d="M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z"
          />
          <path
            fill="#EA4335"
            d="M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z"
          />
          <path
            fill="#34A853"
            d="M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z"
          />
          <path
            fill="#4285F4"
            d="M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263    l10.526-23.684L148.882-3.75H12.039z"
          />
          <path
            fill="#188038"
            d="M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z"
          />
          <path
            fill="#FBBC04"
            d="M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z"
          />
          <path
            fill="#1967D2"
            d="M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z"
          />
        </g>
      </g>
    </svg>
  );
}

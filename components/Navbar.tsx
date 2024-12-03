"use client"

import * as React from "react";
import PwrLogo from "@/public/pwrlogo.png";
import PlFlag from "@/public/pl.png";
import Solvro from "@/public/logo_solvro_mono.svg";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex flex-col lg:flex-row justify-between items-center my-4 px-[4rem] select-none">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <div className="flex flex-row justify-center items-center gap-4">
          <Link href='/'>
            <Image src={PwrLogo} alt="PWR logo" width={70} className="dark:invert" />
          </Link>
          <XMarkIcon className="h-6 w-6" />
          <Link href='https://solvro.pwr.edu.pl/' target="_blank">
            <Image src={Solvro} alt="PWR logo" width={100} className="invert dark:invert-0" />
          </Link>
        </div>
        <button
          className="lg:hidden text-gray-800 dark:text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      <div className={`flex-col lg:flex-row flex lg:flex items-center font-bold ${isOpen ? 'flex mt-5 gap-1' : 'hidden gap-8'} lg:flex`}>
        <Link href='/education' className="relative group">
          Education
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <div className="relative group">
          <div className="flex flex-row items-center cursor-pointer">
            Department
            <ChevronDownIcon className="h-5 w-5 ml-1" />
          </div>
          <div className='absolute top-3 right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all hidden duration-200 z-10 opacity-0 group-hover:block group-hover:opacity-100 group-hover:top-5'>
            <Link href='/department/faculty' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Faculty</Link>
            <Link href='/department/research' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Research</Link>
            <Link href='/department/staff' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Staff</Link>
          </div>
        </div>
        <Link href='/contact' className="relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Button className="bg-red-800 text-white flex items-center gap-2 h-10">
            PL
            <Image src={PlFlag} alt="PL flag" height={10} />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

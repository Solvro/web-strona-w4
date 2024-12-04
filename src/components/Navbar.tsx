"use client";

import PwrLogo from "@/assets/pwr.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <nav className="max-w-screen-xl mx-auto py-4 w-full flex flex-col lg:flex-row justify-between items-center px-4 select-none">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <div className="flex flex-row justify-center items-center gap-4">
          <Link href="/">
            <Image
              src={PwrLogo}
              alt="Emblem of Wroclaw University of Science and Technology"
              className="w-12 h-auto"
            />
          </Link>
        </div>
        {/* <button className="lg:hidden text-gray-800 dark:text-white" onClick={toggleMenu}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button> */}
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/education" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Education
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Department</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

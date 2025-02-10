"use client";

import WitLogo from "@/assets/wit-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { ThemeSwitch } from "./ThemeSwitch";

export function Navbar() {
  return (
    <div className="relative z-20">
      <nav className="max-w-screen-xl mx-auto py-4 w-full flex flex-row justify-between items-center px-4 select-none">
        <Link href="/">
          <Image
            src={WitLogo}
            alt="Emblem of Wroclaw University of Science and Technology"
            className="w-12 h-auto"
          />
        </Link>
        <NavigationMenu className="hidden sm:flex">
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
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="!ml-4">
              <ThemeSwitch />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <div className="flex flex-row justify-end space-x-2 sm:hidden">
            <ThemeSwitch />
            <SheetTrigger asChild>
              <Button variant="outline">
                <Bars3Icon className="size-6" />
                <span className="text-sm font-medium">Menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent className="z-[9999]">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src={WitLogo}
                  alt="Emblem of Wroclaw University of Science and Technology WIT"
                  className="w-12 h-auto"
                />
              </SheetTitle>
              <SheetDescription className="pt-6 dark:text-white">
                <Link
                  href="/education"
                  className="font-medium py-1 px-2 hover:opacity-90 rounded-md block text-left"
                >
                  Education
                </Link>
                <Link
                  href="/department"
                  className="font-medium py-1 px-2 hover:opacity-90 rounded-md block text-left"
                >
                  Department
                </Link>
                <Link
                  href="/#contact"
                  className="font-medium py-1 px-2 hover:opacity-90 rounded-md block text-left"
                >
                  Contact
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

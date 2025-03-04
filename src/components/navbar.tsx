"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
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

import { ThemeSwitch } from "./theme-switch";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="relative z-20">
      <nav className="mx-auto flex w-full max-w-screen-xl select-none flex-row items-center justify-between px-4 py-4">
        <div className="flex items-center gap-1">
          <Link href="/">
            <Image
              src="/wit-logo.svg"
              width={200}
              height={200}
              alt="Emblem of Faculty of Information and Communication Technology"
              className="h-auto w-14"
            />
          </Link>

          <XMarkIcon className="size-6" />

          <a
            href="https://solvro.pwr.edu.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/solvro.png"
              width={200}
              height={200}
              alt="Solvro logo"
              className="h-14 w-auto"
            />
          </a>
        </div>
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/#education" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Education
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Department</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#contact" legacyBehavior passHref>
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
                  src="/wit-logo.svg"
                  width={200}
                  height={200}
                  alt="Emblem of Wroclaw University of Science and Technology WIT"
                  className="h-auto w-12"
                />
              </SheetTitle>
              <SheetDescription className="pt-6 dark:text-white">
                <Link
                  href="/#education"
                  className="block rounded-md px-2 py-1 text-left font-medium hover:opacity-90"
                >
                  Education
                </Link>
                <Link
                  href="/department"
                  className="block rounded-md px-2 py-1 text-left font-medium hover:opacity-90"
                >
                  Department
                </Link>
                <Link
                  href="/#contact"
                  className="block rounded-md px-2 py-1 text-left font-medium hover:opacity-90"
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

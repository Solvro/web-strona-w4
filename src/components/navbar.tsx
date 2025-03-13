"use client";

import {
  Bars3Icon,
  // XMarkIcon
} from "@heroicons/react/20/solid";
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
              src="/CPSG_cropped.svg"
              width={200}
              height={200}
              alt="Emblem of Faculty of Information and Communication Technology"
              className="h-100 h-auto dark:invert"
            />
          </Link>

          {/* <XMarkIcon className="size-6" />

          <Link href="/">
            <Image
              src="/wit-logo.svg"
              width={200}
              height={200}
              alt="Emblem of Faculty of Information and Communication Technology"
              className="h-auto w-14"
            />
          </Link> */}

          {/* <a
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
          </a> */}
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
              <NavigationMenuContent>
                <ul className="grid w-[400px] max-w-full gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <NavigationMenuLink
                    href="https://wit.pwr.edu.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    Department&apos;s website
                  </NavigationMenuLink>
                  <Link href="/#our-team" legacyBehavior passHref>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      Our Team
                    </NavigationMenuLink>
                  </Link>
                </ul>
              </NavigationMenuContent>
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
                  className="block px-2 py-1 text-left font-medium text-neutral-900 hover:opacity-90"
                >
                  Education
                </Link>
                <div className="block px-2 py-1 text-left font-medium text-neutral-900">
                  <span className="mb-1 block">Department</span>
                  <ul className="ml-4 border-b">
                    <a
                      href="https://wit.pwr.edu.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm font-normal text-neutral-800 hover:opacity-90"
                    >
                      Department&apos;s website
                    </a>
                    <Link
                      href="/#our-team"
                      className="block py-1 text-sm font-normal text-neutral-800 hover:opacity-90"
                    >
                      Our Team
                    </Link>
                  </ul>
                </div>
                <Link
                  href="/#contact"
                  className="block px-2 py-1 text-left font-medium text-neutral-900 hover:opacity-90"
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

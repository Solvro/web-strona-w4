"use client";

import PwrLogo from "@/assets/pwr.png";
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

export function Navbar() {
  return (
    <nav className="max-w-screen-xl mx-auto py-4 w-full flex flex-row justify-between items-center px-4 select-none">
      <Link href="/">
        <Image
          src={PwrLogo}
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
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="sm:hidden">
            <Bars3Icon className="size-6" />
            <span className="text-sm font-medium">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                src={PwrLogo}
                alt="Emblem of Wroclaw University of Science and Technology"
                className="w-12 h-auto"
              />
            </SheetTitle>
            <SheetDescription className="pt-6">
              <Link
                href="/education"
                className="text-black font-medium py-1 px-2 hover:bg-stone-50 rounded-md block text-left"
              >
                Education
              </Link>
              <Link
                href="/department"
                className="text-black font-medium py-1 px-2 hover:bg-stone-50 rounded-md block text-left"
              >
                Department
              </Link>
              <Link
                href="#contact"
                className="text-black font-medium py-1 px-2 hover:bg-stone-50 rounded-md block text-left"
              >
                Contact
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

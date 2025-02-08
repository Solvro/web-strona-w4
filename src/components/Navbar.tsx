"use client";

import W4Logo from "@/assets/w4.png";
import SolvroLogo from "@/assets/solvro.png";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="bg-transparent relative z-20">
      <nav className="max-w-screen-xl mx-auto py-4 w-full flex flex-row justify-between items-center px-4 select-none">
        <div className="flex items-center gap-1">
          <Link href="/">
            <Image
              src={W4Logo}
              alt="Emblem of Faculty of Information and Communication Technology"
              className="w-14 h-auto"
            />
          </Link>

          <XMarkIcon className="size-6" />

          <Link href="https://solvro.pwr.edu.pl" target="_blank" rel="noopener noreferrer">
            <Image
              src={SolvroLogo}
              alt="Solvro logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* <button onClick={toggleTheme}>TOGGLE THEME</button> */}

        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/education" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-red-500/5 transition-all`}>
                  Education
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-red-500/5 transition-all">Department</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-red-500/5 transition-all`}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          
          <div className="flex items-center gap-1 ml-2">
            <Switch
              id="theme-switch"
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
            />

            <Label htmlFor="theme-switch" className="cursor-pointer">
              {isDarkMode ? (
                <SunIcon className="size-5" />
              ) : (
                <MoonIcon className="size-5" />
              )}
            </Label>
          </div>
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
                <div className="flex items-center gap-1">
                  <Link href="/">
                    <Image
                      src={W4Logo}
                      alt="Emblem of Faculty of Information and Communication Technology"
                      className="w-12 h-auto"
                    />
                  </Link>

                  <XMarkIcon className="size-6" />

                  <Link href="https://solvro.pwr.edu.pl" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={SolvroLogo}
                      alt="Solvro logo"
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
              </SheetTitle>
              <SheetDescription className="pt-6">
                <Link
                  href="/education"
                  className="text-black dark:text-white font-medium py-1 px-2 hover:bg-stone-50 rounded-md block text-left"
                >
                  Education
                </Link>
                <Link
                  href="/department"
                  className="text-black dark:text-white font-medium py-1 px-2 hover:bg-stone-50 rounded-md block text-left"
                >
                  Department
                </Link>
                <Link
                  href="#contact"
                  className="text-black dark:text-white font-medium py-1 px-2 hover:bg-stone-50 rounded-md block text-left"
                >
                  Contact
                </Link>

                <div className="flex items-center gap-1 ml-2 mt-3">
                  <Switch
                    id="theme-switch"
                    checked={isDarkMode}
                    onCheckedChange={toggleTheme}
                  />

                  <Label htmlFor="theme-switch" className="cursor-pointer">
                    {isDarkMode ? (
                      <SunIcon className="size-5" />
                    ) : (
                      <MoonIcon className="size-5" />
                    )}
                  </Label>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

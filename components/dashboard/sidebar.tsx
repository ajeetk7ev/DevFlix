"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/data/dashboard-links";
import { Menu, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../home/header/mode-toggle";

// -------------------- Desktop Sidebar --------------------

export const DesktopSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:top-0 md:flex w-64 bg-slate-100 dark:bg-gray-900 text-black dark:text-white border-r dark:border-gray-700 px-4 py-6 z-40">
      <div className="flex flex-col h-full space-y-6">
        {/* Sidebar Header */}
         <div className="flex items-center">
         <h1 className="text-2xl font-bold px-4">DevFlix</h1>
         <ModeToggle/>
         </div>
        {/* Links */}
        <div className="space-y-2 pt-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.id}
                href={link.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    : "hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t dark:border-gray-700 space-y-4">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>

          <div className="flex items-center gap-3 px-4">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-semibold">Shadcn</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

// -------------------- Mobile Sidebar --------------------

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="h-14 px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          DevFlix
        </h1>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-64 sm:w-72">
            <SheetHeader>
             <div className="flex items-center justify-around">
             <SheetTitle className="text-xl font-bold text-left">DevFlix</SheetTitle>
             <ModeToggle/>
             </div>
            </SheetHeader>

            {/* Links */}
            <div className="mt-6 space-y-2">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <SheetClose asChild key={link.id}>
                    <Link
                      href={link.path}
                      className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                          : "hover:bg-gray-200 dark:hover:bg-gray-800"
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      {link.name}
                    </Link>
                  </SheetClose>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t dark:border-gray-700 space-y-4">
              <SheetClose asChild>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
              </SheetClose>

              <div className="flex items-center gap-3 px-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-semibold">Shadcn</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

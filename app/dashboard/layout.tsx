"use client";

import { DesktopSidebar, MobileSidebar } from "@/components/dashboard/sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 overflow-x-hidden">
      {/* Mobile Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <MobileSidebar />
      </div>

      <div className="flex pt-14 md:pt-0">
        {/* Desktop Sidebar */}
        <div className="hidden md:block fixed top-0 left-0 h-full w-64 z-40">
          <DesktopSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full p-4 md:p-6 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { sidebarLinks } from "@/data/dashboard-links"
import { Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="w-[250px] min-h-screen overflow-hidden bg-slate-100 dark:bg-gray-900 text-black dark:text-white px-4 py-6 border-r dark:border-gray-700">
      <div className="space-y-6">
        {/* Sidebar Links */}
        <div className="space-y-2">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.id}
                href={link.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Settings + Avatar */}
        <div className="mt-auto pt-6 border-t dark:border-gray-700 space-y-4">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>

          <div className="flex items-center gap-3 px-4">
            <Avatar className="w-9 h-9 rounded-full overflow-hidden border border-gray-400 dark:border-gray-600">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-sm font-semibold">CN</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-semibold">Shadcn</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

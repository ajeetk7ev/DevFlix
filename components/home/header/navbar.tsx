'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/course", label: "Course" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "ContactUs" },
  ]

  return (
    <header className="w-full border-b-2 border-b-slate-300 dark:border-b-slate-800 py-3 z-50 relative">
      <div className="w-[85%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">DevFlix</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-900 dark:text-slate-200 font-medium hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Right Section (ModeToggle + Buttons) */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <div className="space-x-3">
            <Button variant="default">Signin</Button>
            <Button variant="secondary">Signup</Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 space-y-3 bg-white dark:bg-gray-950 py-4 border-t dark:border-gray-800 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-slate-900 dark:text-slate-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <ModeToggle />
            <Button variant="default" className="w-full">
              Signin
            </Button>
            <Button variant="secondary" className="w-full">
              Signup
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

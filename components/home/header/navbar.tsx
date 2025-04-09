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
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-950 shadow-sm border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          DevFlix
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <div className="space-x-2">
            <Button variant="default">Signin</Button>
            <Button variant="secondary">Signup</Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <ModeToggle />
            <Button variant="default">Signin</Button>
            <Button variant="secondary">Signup</Button>
          </div>
        </div>
      )}
    </header>
  )
}

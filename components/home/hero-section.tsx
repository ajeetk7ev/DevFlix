'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] text-black dark:text-white py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          DevFlix: Your Ultimate Developer Learning Hub
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
          Discover curated roadmaps, track your coding progress, get AI-powered suggestions, and join a community of passionate developers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button className="text-lg px-6 py-3">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="text-lg px-6 py-3 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Explore Content
          </Button>
        </div>
      </div>
    </section>
  )
}

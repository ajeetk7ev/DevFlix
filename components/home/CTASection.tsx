'use client'

import { Button } from "@/components/ui/button"
import { ArrowRightCircle } from "lucide-react"

export default function JoinDevFlix() {
  return (
    <section className="w-full bg-primary text-white py-20 transition-colors duration-500 dark:bg-[#1e1b4b]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Ready to level up your developer journey?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Join thousands of learners using DevFlix to grow their skills, build real projects, and crack top tech jobs.
        </p>
        <Button className="text-lg px-6 py-3">
          Get Started Now <ArrowRightCircle className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}

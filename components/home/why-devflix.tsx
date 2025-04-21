'use client'

import { Code2, Sparkles, Compass, Users } from "lucide-react"

const features = [
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: "Curated Roadmaps",
    description: "Step-by-step learning paths for DSA, Web Dev, DevOps, Core CS, and more.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "AI Recommendations",
    description: "Smart content suggestions based on your skills, goals, and progress.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Student Community",
    description: "Collaborate, share resources, and grow with fellow developers.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Open Source Projects",
    description: "Real-world coding projects to build your portfolio and gain experience.",
  },
]

export default function WhyDevFlix() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-6">
          Why Choose DevFlix?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          DevFlix isn’t just another learning site — it’s your personalized journey to becoming a better developer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-xl transition-shadow text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

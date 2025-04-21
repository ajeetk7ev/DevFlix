'use client'

import Image, { StaticImageData } from "next/image"
import hiteshImage from '@/public/images/instructor/hitesh.jpg'
import lovebabbarImage from '@/public/images/instructor/lovebabbar.jpg'
import rohitnegiImage from '@/public/images/instructor/rohitnegi.jpg'
import striverImage from '@/public/images/instructor/striver.jpg'

// Add this in your global.css or tailwind layer if not already
// .animate-marquee { animation: marquee 40s linear infinite; }
// @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }

type Instructor = {
  name: string
  role: string
  image: StaticImageData
  description: string
  tags: string[]
}

const instructors: Instructor[] = [
  {
    name: "Hitesh Singh",
    role: "Full Stack Developer",
    image: hiteshImage,
    description:
      "8+ years in backend engineering. Ex-Flipkart. Loves teaching scalable system design and DevOps.",
    tags: ["Flipkart", "DevOps", "System Design"],
  },
  {
    name: "Love Babbar",
    role: "Full-Stack Developer and DSA",
    image: lovebabbarImage,
    description:
      "Worked with startups and unicorns. Specializes in MERN stack and frontend architecture.",
    tags: ["MERN Stack", "Next.js", "UI/UX"],
  },
  {
    name: "Striver",
    role: "CP Mentor & SDE @ Google",
    image: striverImage,
    description:
      "Founder of TakeUForward. Expert in DSA and system design with a passion for teaching.",
    tags: ["DSA", "Google", "TakeUForward"],
  },
  {
    name: "Rohit Negi",
    role: "Cloud Architect",
    image: rohitnegiImage,
    description:
      "AWS Certified, loves teaching cloud infra, CI/CD, and DevOps tooling at scale.",
    tags: ["AWS", "CI/CD", "DevOps"],
  },
]

export default function Instructor() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-6">
          Meet Your Instructors
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Learn from top engineers and mentors who’ve been there, done that.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee w-max gap-8">
            {[...instructors, ...instructors].map((instructor, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-900 min-w-[300px] max-w-[300px] p-6 rounded-2xl shadow hover:shadow-xl transition-shadow text-left text-gray-800 dark:text-white"
              >
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-primary mx-auto">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {instructor.name}
                </h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  {instructor.role}
                </p>
                <p className="text-sm mt-4 text-gray-700 dark:text-gray-300 text-center">
                  {instructor.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {instructor.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary dark:text-white dark:bg-white/10 px-3 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

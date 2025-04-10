"use client";

import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import webDevThumbnail from '@/public/thumbnail/webdev.jpg'
import { BrainCircuit, AlarmClockCheck, MessageCircle } from "lucide-react";


const features = [
  {
    title: "AI-Powered Roadmaps",
    description:
      "Generate personalized learning paths using AI based on your goals and progress.",
    icon: BrainCircuit,
  },
  {
    title: "Real-Time Contest Alerts",
    description:
      "Never miss a coding contest again. Stay updated with alerts from Codeforces, LeetCode, and more.",
    icon: AlarmClockCheck,
  },
  {
    title: "Peer-to-Peer Doubt Solving",
    description:
      "Chat and solve doubts instantly with the DevFlix community.",
    icon: MessageCircle,
  },
];

const featuredVideos = [
  {
    title: "System Design Crash Course",
    channel: "Hitesh Choudhary",
    duration: "2hr 15min",
    videoUrl: "https://www.youtube.com/watch?v=ldYcgPKEZC8",
    thumbnail: webDevThumbnail,
  },
  {
    title: "DSA Roadmap for 2025",
    channel: "Love Babbar",
    duration: "1hr 40min",
    videoUrl: "https://www.youtube.com/watch?v=5_5oE5lgrhw",
    thumbnail: webDevThumbnail,
  },
  {
    title: "Mastering React in 2025",
    channel: "Code with Harry",
    duration: "1hr 20min",
    videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    thumbnail: webDevThumbnail,
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Features That Make DevFlix Unique
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          Everything you need to learn smart, grow fast, and crack top tech jobs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 hover:border-slate-500 transition-all duration-300"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl 
                   bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300
                   group-hover:bg-slate-700 group-hover:text-white
                   dark:group-hover:bg-slate-600 dark:group-hover:text-white
                   mx-auto mb-5 transition-all"
              >
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>



        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Featured Learning Videos
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-slow w-max gap-8">
            {[...featuredVideos, ...featuredVideos].map((video, idx) => (
              <Link
                key={idx}
                href={video.videoUrl}
                target="_blank"
                className="bg-white dark:bg-slate-900 rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all border border-slate-100 dark:border-slate-800 min-w-[320px] max-w-[320px]"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    {video.title}
                  </h4>
                  <div className="text-sm text-gray-600 dark:text-gray-300 flex justify-between mt-2">
                    <span>By <strong>{video.channel}</strong></span>
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center text-red-600 dark:text-red-400 mt-3">
                    <FaYoutube className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Watch on YouTube</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default async function CoursePage() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return (
        <div className="text-center text-lg text-gray-500 dark:text-gray-300">
          Please log in to view courses.
        </div>
      );
    }

    const courses = await prisma.course.findMany();
    // console.log("Courses are ", courses);

    return (
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        🚀 Explore Our Courses
      </h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <CardHeader className="relative h-48 overflow-hidden group">
              <Image
                src={course.thumbnailUrl}
                alt={`Thumbnail of ${course.title}`}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </CardHeader>
    
            <CardContent className="p-5">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                🎓 <strong>Instructor:</strong> {course.instructor}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                🌐 <strong>Platform:</strong> {course.platform}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                🔒 <strong>Access:</strong> {course.accessType}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                ⏱️ <strong>Duration:</strong> {course.duration}
              </p>
    
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center w-full font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white px-4 py-2 rounded-xl transition-all duration-300"
              >
                View Course
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    
    
    );
  } catch (error) {
    console.error("Error fetching courses:", error);
    return (
      <div className="text-center text-red-500 text-lg dark:text-red-400">
        Failed to load courses. Please try again later.
      </div>
    );
  }
}
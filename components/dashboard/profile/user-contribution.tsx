"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CourseCard } from "./course-card";

const tabs = ["Courses", "Dsa Sheets"];
type Course = {
    id: string;
    title: string;
    description?: string;
    thumbnailUrl: string;
    instructor: string;
    platform: string;
    accessType: string;
    duration: string;
    url: string;
  };
  
 
  

export function UserContribution() {
  const [activeTab, setActiveTab] = useState("Courses");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(()=>{
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const response = await fetch("/api/courses", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        console.log("Courses data:", data);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
      setLoading(false);
    };
    fetchCourses();
  },[])
  return (
    <div className="w-full mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        📊 Your Contribution
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
      {activeTab === "Courses" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-48">
                <p className="text-3xl font-semibold text-blue-500 animate-pulse">
                  Loading...
                </p>
              </div>
            ) : (
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            )}
          </div>
        )}

        {activeTab === "Dsa Sheets" && (
          <Card className="mb-6 shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ✅ You contributed 2 DSA Sheets
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Last addition: <span className="font-medium">Striver's Sheet</span>
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

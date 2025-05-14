"use client";

import { createCourse } from "@/actions/courseAction";
import { AddCourse } from "@/components/dashboard/contribute/course/add-course";
import { useState } from "react";

const tabs = ["Course", "DSA Sheet"];



export default function ContributePage() {
  const [activeTab, setActiveTab] = useState("Course");


  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      {/* Tabs */}
      <div className="w-52 sm:w-56 md:w-60 lg:w-64 mx-auto bg-slate-300 dark:bg-slate-900 rounded-full flex items-center justify-around space-x-4 mb-6 py-2 px-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-semibold rounded-full ${
              activeTab === tab
                ? " bg-slate-400 dark:bg-slate-950 text-black dark:text-white"
                : " text-black dark:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-slate-900  rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
        {activeTab === "Course" && (
         
          

          <AddCourse/>
        )}

        {activeTab === "DSA Sheet" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Contribute a DSA Sheet</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="DSA Sheet Title"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
              />
              <textarea
                placeholder="Sheet Topics or Description"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit DSA Sheet
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

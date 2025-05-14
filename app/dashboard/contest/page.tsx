"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Timer } from "lucide-react";

const tabs = ["Upcoming", "Leetcode", "Codeforces", "CodeChef"];

const platformMap: Record<string, string> = {
  Upcoming: "upcoming",
  Leetcode: "leetcode",
  Codeforces: "codeforces",
  CodeChef: "codechef"
};

type Contest = {
  site: string;
  title: string;
  startTime: number;
  endTime: number;
  duration: number;
  url: string;
};

export default function ContestPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [contestData, setContestData] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContestData = async (platform: string) => {
    setLoading(true);
    try {
      const mappedPlatform = platformMap[platform];
      const res = await fetch(`https://competeapi.vercel.app/contests/${mappedPlatform}`);
      const data = await res.json();
  
      if (mappedPlatform === "upcoming" || mappedPlatform === "codeforces") {
        setContestData(data);
        return;
      }
  
      if (mappedPlatform === "leetcode") {
        const leetCodeData = data.data.topTwoContests.map((contest: any) => ({
          site: "leetcode",
          title: contest.title,
          startTime: contest.startTime * 1000, // API returns in seconds
          endTime: (contest.startTime + contest.duration) * 1000,
          duration: contest.duration * 1000,
          url: `https://leetcode.com/contest/`, // or use title slug if available
          cardImg: contest.cardImg
        }));
        setContestData(leetCodeData);
        return;
      }
  
      if (mappedPlatform === "codechef") {
        const codechefContests = data.future_contests.map((contest: any) => {
          const start = new Date(contest.contest_start_date_iso).getTime();
          const end = new Date(contest.contest_end_date_iso).getTime();
          return {
            site: "codechef",
            title: contest.contest_name,
            startTime: start,
            endTime: end,
            duration: end - start,
            url: `https://www.codechef.com/${contest.contest_code}`
          };
        });
        setContestData(codechefContests);
        return;
      }
    } catch (error) {
      console.error("Error fetching contest data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContestData(activeTab);
  }, [activeTab]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });
  };

  const formatDuration = (ms: number) => {
    const totalMinutes = Math.floor(ms / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m`;
  };

  const getBadgeColor = (site: string) => {
    const map: Record<string, string> = {
      codeforces: "bg-blue-500",
      leetcode: "bg-orange-500",
      codechef: "bg-purple-600"
    };
    return map[site.toLowerCase()] || "bg-gray-600";
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        📅 Upcoming Coding Contests
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Contest Cards */}
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : contestData.length === 0 ? (
        <p className="text-center text-gray-500">No contests found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contestData.map((contest, index) => (
            <a
              key={index}
              href={contest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-xl p-5 hover:shadow-xl hover:border-blue-400 transition-all bg-white dark:bg-gray-900"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-semibold text-white px-2 py-1 rounded ${getBadgeColor(
                    contest.site
                  )}`}
                >
                  {contest.site}
                </span>
                <span className="text-xs text-gray-500">{`#${index + 1}`}</span>
              </div>
              <h2 className="font-semibold text-lg mb-2">{contest.title}</h2>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} /> Start: {formatDate(contest.startTime)}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} /> End: {formatDate(contest.endTime)}
                </p>
                <p className="flex items-center gap-2">
                  <Timer size={16} /> Duration: {formatDuration(contest.duration)}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";

// You can replace this inline SVG with an imported component if needed
const LeetCodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M13.2 2L10.7 4.5L13.2 7L14.3 5.9L13.1 4.7L14.3 3.5L16.8 6L14.3 8.5L12.9 7.1L10.4 9.6C9.8 10.2 9.8 11.2 10.4 11.8L12.9 14.3L14.3 12.9L16.8 15.4L14.3 17.9L13.2 16.8L14.4 15.6L13.2 14.4L10.7 16.9L13.2 19.4L17.5 15.1C18.1 14.5 18.1 13.5 17.5 12.9L15 10.4L16.4 9L18.9 11.5C20.1 12.7 20.1 14.7 18.9 15.9L13.2 21.6L8.9 17.3L10.3 15.9L8.9 14.5L7.5 15.9L3.1 11.5L7.5 7.1L8.9 8.5L7.7 9.7L9.1 11.1L10.3 9.9L8.9 8.5L13.2 4.2L18.9 9.9C20.1 11.1 20.1 13.1 18.9 14.3L17.5 15.7L18.9 17.1C20.1 18.3 20.1 20.3 18.9 21.5L13.2 27.2L7.5 21.5C6.3 20.3 6.3 18.3 7.5 17.1L8.9 15.7L7.5 14.3C6.3 13.1 6.3 11.1 7.5 9.9L13.2 4.2"
      fill="#FFA116"
    />
  </svg>
);

export  function  LeetcodeProfile() {
  
  const leetcodeStats = {
    totalEasy: 120,
    totalMedium: 85,
    totalHard: 30,
    easy: 120,
    medium: 85,
    hard: 30,
    total: 3350,
    solved: 235,
  };

  return (
    <Card className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-xl rounded-2xl p-2 sm:p-4 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-2xl max-w-xl mx-auto w-full">
      <CardHeader>
        <div className="flex items-center justify-center gap-3">
          <LeetCodeIcon />
          <h2 className="text-2xl font-bold text-[#FFA116] dark:text-[#FFA116] tracking-wide">
            LeetCode Profile
          </h2>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 mt-2">
        {/* Overall Progress */}
        <div className="text-center text-lg font-semibold">
          <span className="text-green-600 dark:text-green-400">
            {leetcodeStats.solved}
          </span>{" "}
          solved out of{" "}
          <span className="text-gray-500 dark:text-gray-400">
            {leetcodeStats.total}
          </span>{" "}
          problems
        </div>

        {/* Difficulty Breakdown */}
        <div className="space-y-4">
          {/* Easy */}
          <div className="flex justify-between items-center bg-green-100 dark:bg-green-900 rounded-lg px-4 py-2">
            <p className="text-green-800 dark:text-green-300 font-medium">Easy</p>
            <span className="text-sm font-semibold text-green-800 dark:text-green-300">
              {leetcodeStats.easy} / {leetcodeStats.totalEasy}
            </span>
          </div>

          {/* Medium */}
          <div className="flex justify-between items-center bg-yellow-100 dark:bg-yellow-900 rounded-lg px-4 py-2">
            <p className="text-yellow-800 dark:text-yellow-300 font-medium">Medium</p>
            <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
              {leetcodeStats.medium} / {leetcodeStats.totalMedium}
            </span>
          </div>

          {/* Hard */}
          <div className="flex justify-between items-center bg-red-100 dark:bg-red-900 rounded-lg px-4 py-2">
            <p className="text-red-800 dark:text-red-300 font-medium">Hard</p>
            <span className="text-sm font-semibold text-red-800 dark:text-red-300">
              {leetcodeStats.hard} / {leetcodeStats.totalHard}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

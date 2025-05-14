import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaGraduationCap } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export function PersonalProfile() {
  const personalInfo = {
    name: "ajeet kumar",
    email: "ajeetk8568@gmail.com",
    location: "Andhra Pradesh",
    college: "Shri Venkateshwara College",
  };

  return (
    <Card className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-xl rounded-2xl p-2 sm:p-4 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-2xl max-w-xl mx-auto w-full">
      <CardHeader>
        <h2 className="text-center text-xl sm:text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
          👤 Personal Information
        </h2>
      </CardHeader>

      <CardContent>
        <div className="space-y-6 mt-2">

          {/* Email */}
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
              <MdEmail className="text-xl sm:text-2xl" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Email</div>
              <div className="text-base  sm:text-lg font-medium">{personalInfo.email}</div>
            </div>
          </div>

          {/* College */}
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full">
              <FaGraduationCap className="text-xl sm:text-2xl" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">College</div>
              <div className="text-base sm:text-lg font-medium">{personalInfo.college}</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full">
              <MdLocationOn className="text-xl sm:text-2xl" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Location</div>
              <div className="text-base sm:text-lg font-medium">{personalInfo.location}</div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

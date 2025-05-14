import { LeetcodeProfile } from "@/components/dashboard/profile/leetcode-profile";
import { PersonalProfile } from "@/components/dashboard/profile/personal-profile";
import { UserContribution } from "@/components/dashboard/profile/user-contribution";

export default function Profile() {
 
  
    return (
      <div className="w-full min-h-screen bg-white dark:bg-slate-950 py-10">
      <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PersonalProfile />
        <LeetcodeProfile />
        <PersonalProfile/>
      </div>

      {/* Contribution */}
      <div>
          <UserContribution/>
      </div>
    </div>
    
    );
  }
  
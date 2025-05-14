import { VscAccount } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineEmojiEvents, MdOutlineAddBox } from "react-icons/md";
import { BsDiagram3 } from "react-icons/bs";
import { RiBookOpenLine } from "react-icons/ri";

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/profile",
    icon: VscAccount,
  },
  {
    id: 2,
    name: "Upcoming Contest",
    path: "/dashboard/contest",
    icon: MdOutlineEmojiEvents,
  },
  {
    id: 3,
    name: "Upcoming Hackathon",
    path: "/dashboard/hackathon",
    icon: FaLaptopCode,
  },
  {
    id: 4,
    name: "Courses",
    path: "/dashboard/courses",
    icon: RiBookOpenLine,
  },
  {
    id: 5,
    name: "DSA Sheets",
    path: "/dashboard/dsa-sheets",
    icon: BsDiagram3,
  },
  {
    id: 6,
    name: "Contribute",
    path: "/dashboard/contribute",
    icon: MdOutlineAddBox,
  },
];

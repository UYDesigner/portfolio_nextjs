import { HiOutlineHome } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import { FaGitAlt } from "react-icons/fa";
import { Folder } from "lucide-react";
import { MdConnectWithoutContact } from "react-icons/md";

export const navLinks = [
  {
    icon: <HiOutlineHome />,
    link: '/',
    name: 'Home',
  },
  {
    icon: <GiSkills />,
    link: '/skills',
    name: 'Skills',
  },
  {
    icon: <Folder />,
    link: '/projects',
    name: 'Projects',
  },
  {
    icon: <FaGitAlt />,
    link: '/contributions',
    name: 'GitHub Contributions',
  },
  {
    icon: <MdConnectWithoutContact />,
    link: '/contact',
    name: 'Contact',
  }
];

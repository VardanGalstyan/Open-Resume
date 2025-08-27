"use client";

import { navHighlightAtom } from "@/app/state";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import {
  Briefcase,
  ContactIcon,
  Cpu,
  Globe,
  GraduationCap,
  Presentation,
  TypeOutline,
  UserIcon,
  UserRoundCog,
} from "lucide-react";
import { useState } from "react";

const initialNavigation = [
  { name: "Identity", icon: UserIcon, value: "identity", current: true },
  { name: "Contact", icon: ContactIcon, value: "contact", current: false },
  { name: "Profile", icon: TypeOutline, value: "profile", current: false },
  { name: "Experience", icon: Briefcase, value: "experience", current: false },
  { name: "Technical Skills", icon: Cpu, value: "tech-skills", current: false },
  { name: "Languages", icon: Globe, value: "languages", current: false },
  {
    name: "Soft Skills",
    icon: UserRoundCog,
    value: "soft-skills",
    current: false,
  },
  {
    name: "Education",
    icon: GraduationCap,
    value: "education",
    current: false,
  },
  { name: "Projects", icon: Presentation, value: "projects", current: false },
];

export default function SideNav() {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleClick = (value: string) => {
    setNavigation((prev) =>
      prev.map((item) => ({
        ...item,
        current: item.value === value, // only clicked one gets true
      }))
    );
  };

  return (
    <div
      className={clsx(
        "sticky top-0 h-screen left-0 border border-r overflow-hidden w-4xl border-white/5 bg-white dark:bg-prime-dark z-50"
      )}
    >
      <div className="h-full relative flex gap-2 bg-prime-dark p-4">
        <div className="bg-prime/20 px-2 rounded-l-sm w-9 flex flex-col items-center">
          {navigation.map((item) => (
            <SidebarItem
              key={item.name}
              icon={item.icon}
              value={item.value}
              isCurrent={item.current}
              onClick={() => handleClick(item.value)}
            />
          ))}
        </div>
        <nav className="relative flex flex-1 flex-col overflow-hidden">
          <div className="h-full w-full bg-prime/20 rounded-sm">
            {/* Content Here */}
            <form className="flex flex-col gap-2 items-end p-2">
              <div className="-space-y-px w-full">
                <div className="rounded-t-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:relative focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-gray-700 dark:focus-within:outline-indigo-500">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-900 dark:text-gray-200"
                  >
                    About Me
                  </label>
                  <input
                    id="about-me"
                    name="about-me"
                    type="text"
                    placeholder="A few lines about yourself"
                    className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-white px-4 py-2.5 text-sm text-gray-900 shadow-xs cursor-pointer inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/10"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-white px-4 py-2.5 text-sm text-gray-900 shadow-xs cursor-pointer inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/10"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export const SidebarItem = ({
  icon: Icon,
  value,
  isCurrent,
  onClick,
}: {
  icon: React.ComponentType;
  isCurrent: boolean;
  value: string;
  onClick: () => void;
}) => {
  const setNavHighlight = useSetAtom(navHighlightAtom);
  return (
    <div
      onMouseEnter={() => setNavHighlight(value)}
      onMouseLeave={() => setNavHighlight("")}
      onClick={onClick}
      data-target={value}
      className={clsx(
        "flex items-center gap-2 p-2 w-9 h-9 cursor-pointer",
        isCurrent
          ? "bg-prime/40 text-white"
          : "hover:bg-prime/30 text-white/60 hover:text-white"
      )}
    >
      <Icon />
    </div>
  );
};

"use client";

import AboutForm from "@/ui/sections/About/AboutForm";
import clsx from "clsx";
import {
  Briefcase,
  ContactIcon,
  Cpu,
  Globe,
  GraduationCap,
  Presentation,
  UserRoundCog,
} from "lucide-react";
import { useState } from "react";

const initialNavigation = [
  { name: "Contact", icon: ContactIcon, value: "contact", current: true },
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
            <div className="flex flex-col gap-2 items-end p-2">
              <div className="-space-y-px w-full">
                <AboutForm />
              </div>
            </div>
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
  return (
    <div
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

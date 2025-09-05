"use client";

import AboutForm from "@/ui/sections/About/AboutForm";
import clsx from "clsx";

import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { initialNavigation } from "./navData";
import WorkExpForm from "@/ui/sections/WorkExperience/WorkExpForm";

export default function SideNav() {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleClick = (value: string) => {
    setNavigation((prev) =>
      prev.map((item) => ({
        ...item,
        current: item.value === value,
      }))
    );
  };

  const currentValue = navigation.find((v) => v.current)?.value;

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
                {currentValue === "contact" ? (
                  <AboutForm />
                ) : currentValue === "experience" ? (
                  <WorkExpForm />
                ) : (
                  currentValue
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked?: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="absolute top-2 left-2">
      <input
        type="checkbox"
        id="check"
        onChange={(e) => toggleDarkMode(e.target.checked)}
        checked={isDark}
        className="peer sr-only"
      />
      <label
        htmlFor="check"
        className="flex items-center text-xl cursor-pointer text-red-400 relative"
      >
        <span className="block w-12 h-5.5 rounded-full bg-yellow-300 mr-2 transition-colors duration-300"></span>
        <span
          className={clsx(
            "absolute top-0.8 w-4 h-4 rounded-full  bg-red-400 transition-transform duration-300",
            mounted && isDark ? "translate-x-7" : "translate-x-1"
          )}
        ></span>
      </label>
    </div>
  );
};
export default DarkToggle;

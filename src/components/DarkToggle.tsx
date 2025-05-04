"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    const root = document.getElementsByTagName("html")[0];
    if (checked) {
      root.className = "dark";
    } else {
      root.className = "";
    }
  };

  return (
    <div className="absolute top-2 left-2">
      <DarkModeSwitch
        checked={isDarkMode}
        sunColor="#2e5077"
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  );
};
export default DarkToggle;

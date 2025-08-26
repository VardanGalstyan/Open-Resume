"use client";

import clsx from "clsx";
import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";
import { useState } from "react";

export default function SideNav() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div
      className={clsx(
        "sticky top-0 h-screen left-0 border border-r overflow-hidden w-4xl border-white/5 bg-white px-2 dark:bg-prime-dark transition-all duration-400 ease-in-out z-50"
      )}
    >
      <div className="h-full flex-col  relative flex bg-prime-dark">
        <div
          onClick={() => setOpenSidebar(!openSidebar)}
          className="h-7 w-7 flex shrink-0 items-center cursor-pointer absolute right-1 top-1 z-20 hover:text-white/80 text-white/60"
        >
          {!openSidebar ? <SidebarOpenIcon /> : <SidebarCloseIcon />}
        </div>
        <nav className="relative flex flex-1 flex-col overflow-hidden pr-14 py-4">
          <div className="p-4 h-full w-full bg-prime/20 rounded-sm">
            <div className="text-lg">Edit Details</div>
            <p className="text-sm text-white/60 mb-4">
              You can edit your details here. Click on any section to modify the
              content. Your changes will be reflected in real-time on the resume
              preview.
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

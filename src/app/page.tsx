"use client";

import Body from "@/components/Body";
import Contact from "@/components/Contact";
import DarkToggle from "@/components/DarkToggle";
import Header from "@/components/Header";
import Print from "@/components/Print";
import React from "react";

export default function Home() {
  const sizeA4 = [210, 297]; // A4 size in mm
  const componentRef = React.useRef<HTMLDivElement>(null);

  // Convert mm to px at 96 DPI
  const [width, height] = sizeA4.map((size) => (size * 96) / 25.4);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg font-roboto">
      <Print contentRef={componentRef} />
      <div
        ref={componentRef}
        style={{ width, height }}
        className="dark:bg-[#1e2738] bg-[#F6F4F0] flex items-center justify-start p-8 flex-col gap-4 relative"
      >
        <DarkToggle />
        <div className="flex justify-between w-full border-b border-prime pb-5">
          <Header />
          <Contact />
        </div>
        <Body />
      </div>
    </div>
  );
}

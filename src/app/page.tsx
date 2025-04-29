/* eslint-disable @next/next/no-img-element */

import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home() {
  const sizeA4 = [210, 297]; // A4 size in mm

  // Convert mm to px at 96 DPI
  const [width, height] = sizeA4.map((size) => (size * 96) / 25.4);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg font-roboto">
      <div
        style={{ width, height }}
        className="bg-[#1e2738] flex items-center justify-start p-8 flex-col gap-4"
      >
        {/* Header Section */}
        <Header />
        {/* Contact Section */}
        <Contact />
        {/* Main Section */}
        <Body />
      </div>
    </div>
  );
}

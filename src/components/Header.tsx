"use client";
/* eslint-disable @next/next/no-img-element */

import { navHighlightAtom } from "@/app/state";
import clsx from "clsx";
import { useAtomValue } from "jotai";

const Header = () => {
  const sectionValue = useAtomValue(navHighlightAtom);

  return (
    <header
      className={clsx(
        "flex flex-col items-center justify-center gap-2 flex-1/3",
        sectionValue === "identity" && "bg-prime/10"
      )}
    >
      <div className="size-18 dark:bg-white bg-prime rounded-full p-0.5">
        <img
          src="https://avatars.githubusercontent.com/u/81989128"
          alt="Avatar"
          className="rounded-full w-full object-cover h-full select-none"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="uppercase tracking-wide font-semibold text-3xl dark:text-white text-prime">
          John Doe
        </div>
        <h1 className="text-lg tracking-wider uppercase text-sec">
          Web Developer
        </h1>
      </div>
    </header>
  );
};
export default Header;

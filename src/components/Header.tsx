/* eslint-disable @next/next/no-img-element */

import { getSession } from "@/app/lib/session-helpers";

const Header = async () => {
  const { data } = await getSession();

  return (
    <header
      className={"flex flex-col items-center justify-center gap-2 flex-1/3"}
    >
      <div className="size-18 dark:bg-white bg-prime rounded-full p-0.5">
        {/* You can add an optional overlay or icon here if needed */}
        <img
          src="https://avatars.githubusercontent.com/u/81989128"
          alt="Avatar"
          className="rounded-full w-full object-cover h-full select-none"
        />
      </div>
      <div className="flex flex-col items-center ">
        <div className="uppercase tracking-wide font-semibold text-3xl dark:text-white text-prime whitespace-nowrap">
          {data?.personal.name}
        </div>
        <h1 className="text-lg tracking-wider uppercase text-sec whitespace-nowrap">
          {data?.personal.professionalTitle}
        </h1>
      </div>
    </header>
  );
};
export default Header;

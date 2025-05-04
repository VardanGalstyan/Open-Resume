/* eslint-disable @next/next/no-img-element */

import React from "react";

type Props = {
  children: React.ReactElement<{ className?: string }>;
  title: string;
};
const SectionTitle = (props: Props) => {
  const { title, children } = props;

  if (!title) return null;

  const enhancedChild = React.cloneElement(children, {
    className: "dark:text-light text-white size-3.5",
  });

  return (
    <div className="pb-2 flex gap-2 items-center text-xs uppercase">
      <div className="p-1 rounded-sm bg-sec w-fit">{enhancedChild}</div>
      <span className="tracking-wider text-prime font-semibold dark:text-white">
        {title}
      </span>
    </div>
  );
};
export default SectionTitle;

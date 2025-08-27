import React from "react";
import EditButton from "./buttons/edit-button";

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
      <div className="w-fit">{enhancedChild}</div>
      <span className="tracking-wider text-prime font-semibold dark:text-white">
        {title}
      </span>
      <div className="absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100">
        <EditButton />
      </div>
    </div>
  );
};
export default SectionTitle;

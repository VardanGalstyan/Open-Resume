import React from "react";

const TextLimit = ({
  text,
  limit,
  ...props
}: { text: string; limit: number } & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={`${
        text.length > 320
          ? "text-orange-500"
          : text.length === limit
          ? "text-red-500"
          : "text-gray-300/60"
      }`}
      {...props}
    >
      {text.length} / {limit}
    </span>
  );
};
export default TextLimit;

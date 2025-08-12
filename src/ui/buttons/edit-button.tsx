import clsx from "clsx";
import { MdEdit } from "react-icons/md";

const EditButton = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "transition-all duration-100 absolute bg-sec flex p-1 items-center rounded-sm justify-center cursor-pointer hover:bg-sec/90 hover:text-gray-50",
        className
      )}
    >
      <MdEdit className="size-3.5" />
    </div>
  );
};

export default EditButton;

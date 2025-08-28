import clsx from "clsx";

export const SidebarItem = ({
  icon: Icon,
  isCurrent,
  onClick,
}: {
  icon: React.ComponentType;
  isCurrent: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 p-2 w-9 h-9 cursor-pointer",
        isCurrent
          ? "bg-prime/40 text-white"
          : "hover:bg-prime/30 text-white/60 hover:text-white"
      )}
    >
      <Icon />
    </div>
  );
};

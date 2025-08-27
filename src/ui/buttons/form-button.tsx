import clsx from "clsx";

type Props = { title: string; type: "button" | "submit" };

function FormButton({ title, type }: Props) {
  return (
    <button
      type={type}
      className={clsx(
        "bg-white px-4 py-2.5 text-sm text-gray-900 cursor-pointer hover:bg-gray-50",
        "dark:bg-white/5 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/10"
      )}
    >
      {title}
    </button>
  );
}

export default FormButton;

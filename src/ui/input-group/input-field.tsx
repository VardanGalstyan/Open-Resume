import { InputHTMLAttributes } from "react";
import TextLimit from "../TextLimit";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ label, ...props }: Props) => {
  return (
    <div className="rounded-t-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:relative focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-gray-700 dark:focus-within:outline-indigo-500">
      <label
        htmlFor={props.name}
        className="block text-xs font-medium text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      <input
        className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
        {...props}
      />
      {props.maxLength && (
        <div className="absolute bottom-1.5 right-3 text-xs text-gray-400 dark:text-gray-500">
          <TextLimit
            text={props.value?.toString() || ""}
            limit={props.maxLength || 0}
          />
        </div>
      )}
    </div>
  );
};

export default InputField;

const TextLimit = ({ text, limit }: { text: string; limit: number }) => {
  return (
    <span
      className={`text-sm font-semibold transition-colors ${
        text.length > 320
          ? "text-orange-500"
          : text.length === limit
          ? "text-red-500"
          : "text-sec"
      }`}
    >
      {text.length} / {limit}
    </span>
  );
};
export default TextLimit;

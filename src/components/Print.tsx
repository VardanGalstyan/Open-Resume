import { useTheme } from "next-themes";
import { useReactToPrint } from "react-to-print";

const Print = ({
  contentRef,
}: {
  contentRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { theme } = useTheme();

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `Resume Sample`,
    bodyClass: theme !== "light" ? "dark" : "",
    onPrintError: () => alert("there is an error when printing"),
  });

  return (
    <button
      onClick={() => handlePrint()}
      className="mb-4 bg-prime text-white px-4 py-2 rounded"
    >
      Print Resume
    </button>
  );
};
export default Print;

import { portalModalAtom } from "@/app/state";
import { useAtom } from "jotai";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children?: React.ReactNode }) => {
  const [isModalOpen, setModalOpen] = useAtom(portalModalAtom);

  if (!isModalOpen) return null;

  return createPortal(
    <div className="text-black w-full h-full inset-0 absolute z-20 backdrop-blur-sm flex justify-center items-center">
      <div className="relative min-w-96 bg-white rounded-sm shadow-2xl shadow-white p-2">
        {children}
        <button
          onClick={() => {
            setModalOpen(false);
          }}
          className="absolute -top-8 right-0 text-white cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ModalPortal;

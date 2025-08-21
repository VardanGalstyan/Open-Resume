import { orAtom, portalModalAtom } from "@/app/state";
import EditButton from "@/ui/buttons/edit-button";
import ModalPortal from "@/ui/ModalPortal";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";

function WorkExpForm() {
  // Global States
  const [{ experience }, setExperience] = useAtom(orAtom);
  const setIsModalOpen = useSetAtom(portalModalAtom);

  // Local State
  const [workExp, setWorkExp] = useState<typeof experience>(experience);

  useEffect(() => {
    setWorkExp(experience);
  }, [experience]);

  function saveUpdatedText(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // setExperience((prev) => ({ ...prev, experience: workExp.title }));
    setIsModalOpen(false);
  }

  //   const textLimit = 360;

  return (
    <>
      <div className="absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100">
        <EditButton />
      </div>
      <ModalPortal>
        <form className="w-full space-y-3">
          {/* <div className="relative">
            <text
              name="title"
              className="w-full shadow p-2 shadow-sec outline-none text-[15px] resize-none transition-colors focus:ring-2 focus:ring-sec/30 focus:shadow-md"
              value={workExp.title}
              maxLength={360}
              placeholder="Summarise your career profile here..."
              onChange={(e) => setAboutText(e.target.value)}
            />
            <text
              name="company"
              className="w-full shadow p-2 shadow-sec outline-none text-[15px] resize-none transition-colors focus:ring-2 focus:ring-sec/30 focus:shadow-md"
              value={workExp.title}
              maxLength={360}
              placeholder="Summarise your career profile here..."
              onChange={(e) => setAboutText(e.target.value)}
            />
            <text
              name="year"
              className="w-full shadow p-2 shadow-sec outline-none text-[15px] resize-none transition-colors focus:ring-2 focus:ring-sec/30 focus:shadow-md"
              value={workExp.title}
              maxLength={360}
              placeholder="Summarise your career profile here..."
              onChange={(e) => setAboutText(e.target.value)}
            />
            <text
              name="steps"
              className="w-full shadow p-2 shadow-sec outline-none text-[15px] resize-none transition-colors focus:ring-2 focus:ring-sec/30 focus:shadow-md"
              value={workExp.title}
              maxLength={360}
              placeholder="Summarise your career profile here..."
              onChange={(e) => setAboutText(e.target.value)}
            />
          </div> */}

          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <button
                type="submit"
                onClick={saveUpdatedText}
                // disabled={aboutText.length === 0}
                className="px-3 py-1.5 bg-sec text-white rounded-sm cursor-pointer hover:bg-sec/90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                Save
              </button>
              {/* <button
                type="button"
                onClick={() => setAboutText(about)}
                className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-sm cursor-pointer hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                Reset
              </button> */}
            </div>

            {/* <TextLimit text={aboutText} limit={textLimit} /> */}
          </div>
        </form>
      </ModalPortal>
    </>
  );
}
export default WorkExpForm;

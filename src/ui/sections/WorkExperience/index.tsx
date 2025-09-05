"use client";

import { orAtom } from "@/app/state";
import EditButton from "@/ui/buttons/edit-button";
import SectionTitle from "@/ui/SectionTitle";
import { useAtomValue } from "jotai";
import { MdWork } from "react-icons/md";

const WorkExperience = () => {
  const { experience } = useAtomValue(orAtom) ?? [];

  return (
    <section className="relative group">
      <SectionTitle title="Work Experience">
        <MdWork />
      </SectionTitle>
      <div className="mt-4">
        {experience?.map(({ title, company, year, steps }, index) => (
          <div
            key={`${year}-${index}`}
            className="flex w-full pl-8 border-l-3 border-sec/20 pb-6 ml-2.5 relative before:absolute before:size-3 before:block before:-left-[7.5px] before:rounded-full before:bg-sec before:border-2 before:border-white/60"
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[11px] text-sec dark:text-secondary">
                    {year}
                  </span>
                  <span className="font-bold text-prime dark:text-white">
                    {title}
                  </span>
                </div>
                <div className="text-[11px] dark:bg-sec/20 bg-sec text-white px-2 py-0.5 rounded-full h-fit">
                  {company}
                </div>
              </div>

              <ul className="pl-4 text-secondary text-xs flex flex-col gap-y-1">
                {steps.map((step, index) => (
                  <li
                    key={`${step}=${index}`}
                    className="list-disc text-teal-800 dark:text-light"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100">
              <EditButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WorkExperience;

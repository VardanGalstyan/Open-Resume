/* eslint-disable @next/next/no-img-element */

import About from "@/ui/sections/About";
import Education from "@/ui/sections/Education";
import Languages from "@/ui/sections/Languages";
import SoftSkills from "@/ui/sections/SoftSkills";
import TechExeprience from "@/ui/sections/TechExeprience";
import WorkExperience from "@/ui/sections/WorkExperience";

const Body = () => {
  return (
    <div className="flex h-full w-full gap-8">
      <section className="h-full w-full flex gap-4 flex-col">
        <About />
        <WorkExperience />
      </section>
      <section className="h-full w-full flex-6/12 gap-4 flex flex-col">
        <TechExeprience />
        <Languages />
        <SoftSkills />
        <Education />
      </section>
    </div>
  );
};
export default Body;

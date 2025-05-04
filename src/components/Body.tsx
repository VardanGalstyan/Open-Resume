/* eslint-disable @next/next/no-img-element */

import About from "@/ui/sections/About";
import Education from "@/ui/sections/Education";
import Languages from "@/ui/sections/Languages";
import Projects from "@/ui/sections/Projects";
import SoftSkills from "@/ui/sections/SoftSkills";
import TechExeprience from "@/ui/sections/TechExeprience";
import WorkExperience from "@/ui/sections/WorkExperience";

const Body = () => {
  return (
    <div className="flex h-full w-full gap-8">
      <section className="h-full children-divided w-full flex gap-4 flex-col">
        <About />
        <WorkExperience />
      </section>
      <section className="h-full children-divided w-full flex-6/12 gap-4 flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:pb-4">
        <TechExeprience />
        <Languages />
        <SoftSkills />
        <Education />
        <Projects />
      </section>
    </div>
  );
};
export default Body;

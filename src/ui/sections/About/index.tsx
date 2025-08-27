"use client";

import { navHighlightAtom } from "@/app/state";
import { OrType } from "@/app/types";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { FaUser } from "react-icons/fa";
import SectionTitle from "../../SectionTitle";

const About = ({ data }: { data?: OrType }) => {
  const about = data?.about || "Kindly write about yourself";
  const sectionValue = useAtomValue(navHighlightAtom);

  return (
    <section
      className={clsx(
        "relative h-fit",
        sectionValue === "profile" && "bg-prime/10"
      )}
    >
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>
      <p className="dark:text-secondary text-sm text-teal-800">{about}</p>
      {/* <AboutForm sessionData={data} /> */}
    </section>
  );
};

export default About;

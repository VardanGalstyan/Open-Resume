import { OrType } from "@/app/types";
import clsx from "clsx";
import { FaUser } from "react-icons/fa";
import SectionTitle from "../../SectionTitle";

const About = ({ data }: { data?: OrType }) => {
  const about = data?.personal?.about || "Kindly write about yourself";

  return (
    <section className={clsx("relative h-fit")}>
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>
      <p className="dark:text-secondary text-sm text-teal-800">{about}</p>
    </section>
  );
};

export default About;

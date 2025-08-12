import { orAtom } from "@/app/state";
import { useAtomValue } from "jotai";
import { FaUser } from "react-icons/fa";
import SectionTitle from "../../SectionTitle";
import EditButton from "../../buttons/edit-button";
import AboutForm from "./AboutForm";

const About = () => {
  const { about } = useAtomValue(orAtom);

  return (
    <section className="relative h-fit group">
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>

      <p className="dark:text-secondary text-sm text-teal-800">{about}</p>

      {/* Edit Button */}
      <div className="absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100">
        <EditButton />
      </div>
      <AboutForm />
    </section>
  );
};

export default About;

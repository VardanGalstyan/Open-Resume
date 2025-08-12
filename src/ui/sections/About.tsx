import { FaUser } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import EditButton from "../buttons/edit-button";

const About = () => {
  return (
    <section className="relative h-fit group">
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>

      <p className="dark:text-secondary text-sm text-teal-800">
        Summarise your career profile here lorem ipsum dolor sit amet...
      </p>

      {/* Edit Button: keep it inside the section’s bounding box */}
      <div className="absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100">
        <EditButton />
      </div>
    </section>
  );
};

export default About;

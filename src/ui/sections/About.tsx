import { FaUser } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <section className="h-fit">
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>
      <p className="dark:text-secondary text-sm text-teal-800">
        Summarise your career profile here lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean
        massa. Cum sociis natoque penatibus et magnis dis parturient montes.
      </p>
    </section>
  );
};
export default About;

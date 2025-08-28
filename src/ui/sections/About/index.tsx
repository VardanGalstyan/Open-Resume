import { getSession } from "@/app/lib/session-helpers";
import { FaUser } from "react-icons/fa";
import SectionTitle from "../../SectionTitle";

const About = async () => {
  const { data } = await getSession();

  return (
    <section className="relative h-fit">
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>

      <p className="dark:text-secondary text-sm text-teal-800">
        {data?.personal.about}
      </p>
    </section>
  );
};

export default About;

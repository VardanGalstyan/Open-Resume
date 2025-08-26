import { getSession } from "@/app/lib/session-helpers";
import { FaUser } from "react-icons/fa";
import SectionTitle from "../../SectionTitle";
import AboutForm from "./AboutForm";

const About = async () => {
  const session = await getSession();
  const about = session.data?.about || "Kindly write about yourself";

  return (
    <section className="relative h-fit group">
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>
      <p className="dark:text-secondary text-sm text-teal-800">{about}</p>
      <AboutForm sessionData={session.data} />
    </section>
  );
};

export default About;

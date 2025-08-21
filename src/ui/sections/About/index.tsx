import { getSession } from "@/app/lib/session-helpers";
import { FaUser } from "react-icons/fa";
import SectionTitle from "../../SectionTitle";
import EditButton from "../../buttons/edit-button";
import AboutForm from "./AboutForm";
import { OrType } from "@/app/types";

const About = async () => {
  // const { about } = useAtomValue(orAtom);
  const session = await getSession();
  const plainData = session as { data?: OrType };
  const about = plainData.data?.about || "No about information available.";

  return (
    <section className="relative h-fit group">
      <SectionTitle title="About me">
        <FaUser />
      </SectionTitle>

      {/* {!about ? (
        <SkeletonLoader />
      ) : (
      )} */}

      <p className="dark:text-secondary text-sm text-teal-800">{about}</p>
      {/* Edit Button */}
      <div className="absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100">
        <EditButton />
      </div>
      <AboutForm sessionData={plainData.data} />
    </section>
  );
};

export default About;

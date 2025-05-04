import { FaUserCog } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const skills = ["Communication", "Project Management", "Leadership"];

const SoftSkills = () => {
  return (
    <section>
      <SectionTitle title="Soft Skills">
        <FaUserCog />
      </SectionTitle>
      <div className="flex gap-x-1 gap-y-1 flex-wrap text-[11px]">
        {skills.map((skill, index) => (
          <span
            className="px-2 py-[2px] bg-[#2E5077] rounded-sm font-bold"
            key={`${skill}-${index}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
export default SoftSkills;

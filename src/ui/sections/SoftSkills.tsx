import SectionTitle from "../SectionTitle";

const skills = ["Communication", "Project Management", "Leadership"];

const SoftSkills = () => {
  return (
    <section>
      <SectionTitle
        title="Soft Skills"
        url="https://img.icons8.com/ios-filled/50/252525/settings.png"
      />
      <div className="flex gap-x-1 gap-y-1 flex-wrap text-[11px]">
        {skills.map((skill, index) => (
          <span
            className="px-2 py-[2px] bg-teal-800 rounded-sm font-bold"
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

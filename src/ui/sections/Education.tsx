import { FaUserGraduate } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const universities = [
  {
    university: "Cornell University",
    year: "2016 - 2017",
    major: "MS in Computer Science",
  },
  {
    university: "Cornell University",
    year: "2016 - 2017",
    major: "Marketing and Revenue Management",
  },
];

const Education = () => {
  return (
    <section>
      <SectionTitle title="Education">
        <FaUserGraduate />
      </SectionTitle>
      <div className="flex flex-col gap-2">
        {universities.map(({ university, year, major }, index) => (
          <div className="flex flex-col" key={`${year}-${major}-${index}`}>
            <span className="text-sm font-bold dark:text-white text-sky-900">
              {major}
            </span>
            <span className="font-bold dark:text-secondary text-teal-800 text-[10px]">
              {university}
            </span>
            <span className="font-bold text-teal-800 text-sm text-[10px] dark:text-secondary">
              {year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;

/* eslint-disable @next/next/no-img-element */

import SectionTitle from "../SectionTitle";
import TechSkill from "../TechSkill";

export const skillset = [
  { skill: "React", exp: 3 },
  { skill: "JavaScript", exp: 3 },
  { skill: "NodeJs", exp: 3 },
  { skill: "Docker", exp: 2 },
];

const maxExpYears = skillset.reduce(
  (max, skill) => Math.max(max, skill.exp),
  0
);

const TechExeprience = () => {
  return (
    <section>
      <SectionTitle
        title="Tech Experience (in Years)"
        url="https://img.icons8.com/ios-filled/50/252525/time.png"
      />
      <div
        style={{
          gridTemplateColumns: `repeat(${maxExpYears}, minmax(0,1fr))`,
        }}
        className="w-full grid gap-y-1 pb-1 pt-2"
      >
        {[...Array(maxExpYears)].map((_, index) => (
          <div key={index} className="border-x h-1 border-gray-600 relative">
            <span className="text-[8px] absolute -top-2 right-[45%] text-center text-secondary">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-y-1">
        {skillset
          .sort((a, b) => b.exp - a.exp)
          .map(({ skill, exp }, index) => (
            <div
              key={`${exp}-${skill}-${index}`}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${maxExpYears}, minmax(0, 1fr))`,
              }}
            >
              <TechSkill skill={skill} exp={exp} />
            </div>
          ))}
      </div>
    </section>
  );
};
export default TechExeprience;

/* eslint-disable @next/next/no-img-element */

import TechExeprience from "@/ui/sections/TechExeprience";
import SectionTitle from "@/ui/SectionTitle";
import TechSkill from "@/ui/TechSkill";

const langLevels = [
  { 1: "A1" },
  { 2: "A2" },
  { 3: "B1" },
  { 4: "B2" },
  { 5: "C1" },
  { 6: "C2" },
  { 7: "N" },
];
const languages = [
  { lang: "Armenian", level: "N" },
  { lang: "English", level: "C1" },
  { lang: "German", level: "B2" },
  { lang: "Russian", level: "C2" },
];

const Body = () => {
  const maxLevel = langLevels.length;
  return (
    <div className="flex h-full w-full gap-8">
      <div className="h-full w-full">
        <SectionTitle
          title="About me"
          url="https://img.icons8.com/ios-filled/60/252525/user.png"
        />
        <p className="mt-4 text-secondary text-sm">
          Summarise your career profile here lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </p>
      </div>
      <section className="h-full w-full flex-6/12 gap-4 flex flex-col">
        <TechExeprience />
        <div className="flex flex-col">
          <SectionTitle
            title="Languages"
            url="https://img.icons8.com/ios-filled/60/252525/language.png"
          />
          <div>
            <div>test</div>
            <div>
              <div
                style={{
                  gridTemplateColumns: `repeat(${maxLevel}, minmax(0,1fr))`,
                }}
                className="w-full grid divide-x divide-gray-600"
              >
                {langLevels.map((lvl, i) => {
                  const label = lvl[(i + 1) as keyof typeof lvl];
                  return (
                    <div
                      key={i}
                      className="relative flex items-center justify-center mb-1"
                    >
                      <span className="text-[8px] text-secondary">{label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex flex-col gap-y-1">
                {languages.map(({ lang, level }) => {
                  // compute how many columns to fill
                  const levelIndex =
                    langLevels.findIndex(
                      (l) => l[Object.keys(l)[0]] === level
                    ) + 1;
                  return (
                    <div
                      key={lang}
                      className="flex items-center gap-2 relative"
                    >
                      <div
                        style={{
                          gridTemplateColumns: `repeat(${maxLevel}, minmax(0,1fr))`,
                        }}
                        className="w-full grid divide-x divide-gray-800"
                      >
                        {Array.from({ length: maxLevel }).map((_, col) => (
                          <div
                            key={col}
                            className={`h-2 rounded-full flex items-center ${
                              col < levelIndex ? "bg-green-600" : ""
                            } px-2`}
                          >
                            {/* only place the language name in the first cell */}
                            {/* {col === 0 && (
                        <span className="text-white text-sm">{lang}</span>
                      )} */}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Body;

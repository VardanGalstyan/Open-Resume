import { FaLanguage } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const langLevels: { [key: number]: string }[] = [
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

const Languages = () => {
  const maxLevel = langLevels.length;

  return (
    <section>
      <SectionTitle title="Languages">
        <FaLanguage />
      </SectionTitle>
      <div className="flex w-full gap-x-2">
        <div>
          <div className="h-3.5" />
          {languages.map(({ lang }) => (
            <div
              className="text-[10px] leading-3 text-prime dark:text-secondary"
              key={lang}
            >
              {lang}
            </div>
          ))}
        </div>
        <div className="w-full">
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
                  <span className="text-[8px] text-teal-800 dark:text-secondary">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col gap-y-1">
            {languages.map(({ lang, level }) => {
              // compute how many columns to fill
              const levelIndex =
                langLevels.findIndex(
                  (l) => l[Number(Object.keys(l)[0])] === level
                ) + 1;
              return (
                <div key={lang} className="flex items-center gap-2 relative">
                  <div
                    style={{
                      gridTemplateColumns: `repeat(${maxLevel}, minmax(0,1fr))`,
                    }}
                    className="w-full grid divide-x dark:divide-gray-800 divide-[#F6F4F0]"
                  >
                    {Array.from({ length: maxLevel }).map((_, col) => (
                      <div
                        key={col}
                        className={`h-2 rounded-full flex items-center ${
                          col < levelIndex ? "bg-[#2E5077]" : ""
                        } px-2`}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Languages;

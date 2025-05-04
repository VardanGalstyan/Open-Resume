import { MdWork } from "react-icons/md";
import SectionTitle from "../SectionTitle";

const experiences = [
  {
    title: "Tech Lead",
    company: "Google",
    year: "2023 - present",
    steps: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta
        est diam, et blandit ipsum suscipit facilisis. Praesent nec semper
        eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porta est diam, et blandit ipsum suscipit facilisis. Praesent nec
        semper eros. Aliquam quis turpis sed metus.`,
      `Vivamus accumsan purus at urna tincidunt convallis. Sed nisi dolor,
        elementum eget tempus ac, blandit ac mi. Aliquam id tellus ut arcu
        luctus accumsan in at odio`,
      "Morbi condimentum, lorem in pharetra mollis, purus justo sollicitudin dolor, tristique vulputate mi odio sit amet ante.",
    ],
  },
  {
    title: "Web Developer",
    company: "Webtec Solutions",
    year: "2023 - present",
    steps: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta
        est diam, et blandit ipsum suscipit facilisis. Praesent nec semper
        eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porta est diam, et blandit ipsum suscipit facilisis. Praesent nec
        semper eros. Aliquam quis turpis sed metus.`,
      `Vivamus accumsan purus at urna tincidunt convallis. Sed nisi dolor,
        elementum eget tempus ac, blandit ac mi. Aliquam id tellus ut arcu
        luctus accumsan in at odio`,
      "Morbi condimentum, lorem in pharetra mollis, purus justo sollicitudin dolor, tristique vulputate mi odio sit amet ante.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section>
      <SectionTitle title="Work Experience">
        <MdWork />
      </SectionTitle>
      <div className="mt-4">
        {experiences.map(({ title, company, year, steps }, index) => (
          <div
            key={`${year}-${index}`}
            className="flex w-full pl-8 border-l-3 border-sec/20 pb-6 ml-2.5 relative before:absolute before:size-3 before:block before:-left-[7.5px] before:rounded-full before:bg-sec before:border-2 before:border-white/60"
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[11px] text-sec dark:text-secondary">
                    {year}
                  </span>
                  <span className="font-bold text-prime dark:text-white">
                    {title}
                  </span>
                </div>
                <div className="text-[11px] dark:bg-sec/20 bg-sec text-white px-2 py-0.5 rounded-full h-fit">
                  {company}
                </div>
              </div>

              <ul className="pl-4 text-secondary text-xs flex flex-col gap-y-1">
                {steps.map((step, index) => (
                  <li
                    key={`${step}=${index}`}
                    className="list-disc text-teal-800 dark:text-light"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WorkExperience;

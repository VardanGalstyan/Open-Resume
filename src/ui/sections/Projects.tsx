import { IoMdGitNetwork } from "react-icons/io";
import SectionTitle from "../SectionTitle";

const projects = [
  {
    title: "Project Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eaque!",
    url: "https://www.google.com",
  },
  {
    title: "Project Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eaque!",
    url: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <section>
      <SectionTitle title="Projects">
        <IoMdGitNetwork />
      </SectionTitle>
      <div className="flex flex-col gap-1">
        {projects.map(({ title, description, url }, index) => (
          <div key={`${title}-${index}`}>
            <div className="text-sm font-bold text-sky-900 dark:text-white">
              <a target="_blank" href={url}>
                {title}
              </a>
            </div>
            <p className="text-[11px] dark:text-secondary text-teal-800">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;

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
    <section className="inner-section">
      <SectionTitle
        title="Education"
        url="https://img.icons8.com/ios-filled/60/252525/book.png"
      />
      <div className="flex flex-col gap-2">
        {universities.map(({ university, year, major }, index) => (
          <div className="flex flex-col" key={`${year}-${major}-${index}`}>
            <span className="text-sm uppercase">{major}</span>
            <span className="font-bold text-secondary text-[10px]">
              {university}
            </span>
            <span className="font-bold text-secondary text-sm text-[10px]">
              {year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;

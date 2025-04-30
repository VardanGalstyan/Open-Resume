type Props = {
  skill: string;
  exp: number;
};

const TechSkill = (props: Props) => {
  const { skill, exp } = props;

  if (!skill) return null;

  return (
    <div
      style={{ gridColumn: `span ${exp}` }}
      className="rounded-sm bg-teal-800/80 transition-all col-span-6 text-sm px-1"
    >
      <span className="text-[11px] font-semibold">{skill}</span>
    </div>
  );
};

export default TechSkill;

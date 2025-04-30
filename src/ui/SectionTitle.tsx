/* eslint-disable @next/next/no-img-element */

type Props = {
  url: string;
  title: string;
};
const SectionTitle = (props: Props) => {
  const { url, title } = props;

  if (!url) return null;

  return (
    <div className="mb-5 flex gap-2 items-center text-xs uppercase text-secondary">
      <div className="p-1 rounded-sm bg-secondary w-fit">
        <img src={url} alt="User Icon" className="w-3.5 h-3.5" />
      </div>
      <span className="tracking-wider">{title}</span>
    </div>
  );
};
export default SectionTitle;

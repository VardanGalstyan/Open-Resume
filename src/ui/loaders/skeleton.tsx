type Props = {
  rows?: number;
};

const SkeletonLoader = (props: Props) => {
  const { rows = 2 } = props;

  return (
    <div className="shadow-md p-1 animate-pulse flex flex-col gap-1">
      {[...Array(rows)].map((_, idx) => (
        <div key={idx} className="w-full h-3 bg-gray-600/40 rounded"></div>
      ))}
    </div>
  );
};
export default SkeletonLoader;

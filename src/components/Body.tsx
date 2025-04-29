/* eslint-disable @next/next/no-img-element */

const Body = () => {
  return (
    <div className="flex h-full w-full gap-8">
      <div className="h-full w-full">
        <div className="flex gap-2 items-center tracking-wider">
          <div className="p-1 rounded-full bg-white w-fit items-center ">
            <img
              src="https://img.icons8.com/ios-filled/50/a4b3cd/user.png"
              alt="User Icon"
              className="w-5 h-5"
            />
          </div>
          <span className="font-bold uppercase">About Me</span>
        </div>
        <p className="mt-4 text-secondary">
          Summarise your career profile here lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </p>
      </div>
      <div className="bg-amber-300/20 h-full w-full flex-6/12">Secondary</div>
    </div>
  );
};
export default Body;

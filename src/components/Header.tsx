/* eslint-disable @next/next/no-img-element */

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-2">
      <div className="size-18 bg-white rounded-full p-0.5">
        <img
          src="https://avatars.githubusercontent.com/u/81989128"
          alt="Avatar"
          className="rounded-full w-full object-cover h-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="uppercase tracking-wide font-semibold text-3xl text-white">
          Vardan Galstyan
        </div>
        <h1 className="text-lg font-[400] tracking-wider uppercase text-[#a4b3cd]">
          Web Developer
        </h1>
      </div>
    </header>
  );
};
export default Header;

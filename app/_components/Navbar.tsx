import Link from "next/link";
import { navItems } from "../data";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-20 px-8 py-6 lg:py-10 bg-neutral-900 text-white font-unbounded">
      <div className="flex justify-center items-center lg:gap-x-[220px]">
        <h4 className="relative border-violet-500 border-opacity-50 lg:border-b-2 pb-1 lg:text-xs text-sm after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-500 hover:after:w-full">
          Based in
          <br />
          Pune - MH, India
        </h4>

        <h4 className="lg:block hidden relative border-violet-500 border-opacity-50 lg:border-b-2 pb-1 lg:text-xs text-sm after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-500 hover:after:w-full">
          Say hello
          <br />
          saadsyed950@gmail.com
        </h4>
      </div>
      <div className="lg:flex hidden justify-center items-center gap-x-6">
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.link} className="uppercase lg:text-sm">
            {item.name}
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="block lg:hidden text-xs border-violet-500 border-b-2 pb-1 uppercase"
      >
        Menu
      </Link>
    </div>
  );
};

export default Navbar;

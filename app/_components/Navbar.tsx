import Link from "next/link";
import { navItems } from "../data";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-20 lg:py-10 bg-black text-white font-unbounded">
      <div className="flex justify-center items-center lg:gap-x-[220px]">
        <h4 className="border-violet-500 border-b-2 pb-1 lg:text-xs">
          Based in
          <br />
          Pune, India
        </h4>
        <h4 className="border-violet-500 border-b-2 pb-1 lg:text-xs lg:block hidden">
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
    </div>
  );
};

export default Navbar;

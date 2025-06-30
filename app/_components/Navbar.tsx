"use client";

import Link from "next/link";
import { navItems } from "../data";
import Menubar from "./Menubar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center w-full lg:px-20 px-8 py-6 lg:py-10 bg-neutral-900 text-white font-unbounded">
      <div className="flex justify-center items-center lg:gap-x-20">
        <Link
          href="/"
          className="relative border-violet-500 border-opacity-50 lg:border-b-2 pb-1 lg:text-xs text-sm after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-500 hover:after:w-full"
        >
          Based in
          <br />
          Pune - MH, India
        </Link>

        <Link
          href="mailto:saadsyed950@gmail.com"
          className="lg:block hidden relative border-violet-500 border-opacity-50 lg:border-b-2 pb-1 lg:text-xs text-sm after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-500 hover:after:w-full"
        >
          Let&apos;s Collaborate
          <br />
          saadsyed950@gmail.com
        </Link>
      </div>
      <div className="lg:flex hidden justify-center items-center gap-x-6">
        {pathName !== "/" && (
          <Link href="/" className="uppercase lg:text-sm">
            Home
          </Link>
        )}
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.link} className="uppercase lg:text-sm">
            {item.name}
          </Link>
        ))}
        <Link
          href="/Saad_Sayyed_CV.pdf"
          target="_blank"
          className="uppercase lg:text-sm"
        >
          Resume
        </Link>
      </div>
      <div className="lg:hidden block">
        <Menubar />
      </div>
    </div>
  );
};

export default Navbar;

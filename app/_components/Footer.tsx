import {
  IconBrandGithub,
  IconBrandHackerrank,
  IconBrandLinkedinFilled,
  IconBrandStackoverflow,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-20 px-8 pb-6 lg:pt-20 pt-14 bg-neutral-900 text-white font-unbounded">
      <h4 className="lg:text-sm text-xs uppercase font-light text-muted-foreground">
        © Saad Sayyed 2025
      </h4>
      <div className="flex justify-center items-center lg:gap-x-6 gap-x-3 text-muted-foreground">
        <Link href="https://github.com/saadtresayyed10" target="_blank">
          <IconBrandGithub className="w-4 h-4 hover:text-violet-500 duration-500" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/saad-sayyed-trev/"
          target="_blank"
        >
          <IconBrandLinkedinFilled className="w-4 h-4 hover:text-violet-500 duration-500" />
        </Link>
        <Link
          href="https://stackoverflow.com/users/29449410/saad-sayyed"
          target="_blank"
        >
          <IconBrandStackoverflow className="w-4 h-4 hover:text-violet-500 duration-500" />
        </Link>
        <Link
          href="https://www.hackerrank.com/profile/saadsyed950"
          target="_blank"
        >
          <IconBrandHackerrank className="w-4 h-4 hover:text-violet-500 duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

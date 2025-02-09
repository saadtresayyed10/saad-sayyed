import Link from "next/link";
import Headings from "./Headings";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full text-white font-unbounded lg:px-20 px-8">
      <Headings title="" />
      <div className="flex lg:justify-between justify-center lg:flex-row flex-col gap-y-10 items-center w-full pt-20">
        <h1 className="lg:text-6xl text-4xl capitalize tracking-wide">
          Let&apos;s collaborate
        </h1>
        <Link
          href="mailto:saadsyed950@gmail.com"
          className="lg:block hidden relative border-violet-500 border-opacity-50 lg:border-b-2 pb-1 lg:text-2xl text-lg after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-500 hover:after:w-full"
        >
          saadsyed950@gmail.com
        </Link>
      </div>
      <form className="flex justify-start items-start flex-col gap-y-4 lg:mt-16 mt-10 w-full">
        <input
          type="email"
          placeholder="Enter Email"
          className="pl-4 pr-8 py-2 bg-transparent border border-violet-500 rounded-full"
        />
        <textarea
          placeholder="Enter Message"
          rows={6}
          className="pl-4 pr-8 py-4 bg-transparent border border-violet-500 rounded-lg"
        />
        <button className="px-6 py-2 bg-violet-500 text-black uppercase font-normal rounded-full lg:text-sm text-xs">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

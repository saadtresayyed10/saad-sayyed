import Link from "next/link";
import Headings from "./Headings";
import Image from "next/image";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full text-white font-unbounded lg:px-20 px-8">
      <Headings title="Projects" />
      <div className="flex justify-center lg:flex-row w-full pt-20">
        <ul className="flex justify-start items-start flex-col gap-y-32 w-full">
          {projects.map((project, idx) => (
            <li
              key={idx}
              className="flex justify-start items-start flex-col lg:gap-y-4 gap-y-3 w-full"
            >
              <h1 className="lg:text-4xl text-3xl font-semibold tracking-wide">
                {project.title}
              </h1>
              <h2 className="lg:text-xl text-base">{project.tags}</h2>
              <h3 className="lg:text-lg text-sm">{project.timePeriod}</h3>
              <p className="lg:text-sm text-xs font-light lg:w-[50%] text-neutral-400">
                {project.description}
              </p>
              <Link
                href={project.link}
                className="lg:text-sm text-xs underline underline-offset-8 text-violet-500 mb-10 lg:mb-6"
                target="_blank"
              >
                {project.link}
              </Link>
              <Image
                key={idx}
                src={project.picture}
                alt={project.title}
                width={1000}
                height={1000}
                className="shadow-md"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CertificatesProps {
  name: string;
  year: number;
  provider: string;
  grade: number;
  time: number;
  link: string;
}

const Certificates = ({
  grade,
  link,
  name,
  provider,
  time,
  year,
}: CertificatesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, ease: "easeOut", duration: 0.6 }}
      className="flex justify-start items-start flex-col lg:gap-y-2 gap-y-1 bg-neutral-800 text-white font-unbounded lg:px-10 px-6 lg:py-8 py-3 shadow-2xl rounded-lg border border-violet-800"
    >
      <h1 className="lg:text-2xl text-xl">{name}</h1>
      <h4 className="text-xs font-light">{year}</h4>
      <h2 className="mt-4 text-lg">{provider}</h2>
      <h3 className="text-sm font-light">{grade}%</h3>
      <h3 className="text-sm font-light">{time} hours approx.</h3>
      <Link
        href={link}
        target="_blank"
        className="text-sm px-6 py-2 bg-violet-500 text-black rounded-full mt-4 flex items-center gap-x-1"
      >
        Visit <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
      </Link>
    </motion.div>
  );
};

export default Certificates;

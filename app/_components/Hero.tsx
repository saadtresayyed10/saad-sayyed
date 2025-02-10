"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full text-white font-unbounded lg:px-20 px-8">
      <div className="flex justify-between items-center w-full">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, ease: "easeOut", duration: 0.4 }}
          className="lg:text-[10rem] text-[4rem] uppercase font-extralight"
        >
          Saad
        </motion.h1>
        <div />
      </div>
      <div className="flex justify-between items-center w-full">
        <div />
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, ease: "easeOut", duration: 0.4 }}
          className="lg:text-[10rem] text-[4rem] uppercase font-extralight"
        >
          Sayyed
        </motion.h1>
      </div>
      <div className="flex justify-start items-start w-full mt-10">
        <motion.h5
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, ease: "backOut", duration: 0.8 }}
          className="text-muted-foreground lg:w-[45%] w-[95%] lg:text-base text-sm"
        >
          I am a fresher Full Stack Web and App Developer who solves real-world
          problems using efficient technologies like React.js, Svelte, Node.js,
          Express, Next.js, Golang, Flask and more. With a strong foundation in
          scalable architecture and performance optimization, I specialize in
          building seamless, high-performance applications. Passionate about
          innovation, I leverage modern frameworks, databases, and cloud
          solutions to create impactful digital experiences.
        </motion.h5>
      </div>
    </div>
  );
};

export default HeroSection;

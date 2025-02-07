const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full text-white font-unbounded lg:px-20 px-8">
      <div className="flex justify-between items-center w-full">
        <h1 className="lg:text-[10rem] text-[4rem] uppercase font-extralight">
          Saad
        </h1>
        <div />
      </div>
      <div className="flex justify-between items-center w-full">
        <div />
        <h1 className="lg:text-[10rem] text-[4rem] uppercase font-extralight">
          Sayyed
        </h1>
      </div>
      <div className="flex justify-start items-start w-full mt-10">
        <h5 className="text-muted-foreground lg:w-[45%] w-[95%] lg:text-base text-sm">
          I am a Full Stack Web and App Developer who solves real-world problems
          using efficient technologies like React.js, Node.js, Express, Next.js,
          Golang and more. With a strong foundation in scalable architecture and
          performance optimization, I specialize in building seamless,
          high-performance applications. Passionate about innovation, I leverage
          modern frameworks, databases, and cloud solutions to create impactful
          digital experiences.
        </h5>
      </div>
    </div>
  );
};

export default HeroSection;

import Headings from "./Headings";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full text-white font-unbounded lg:px-20 px-8">
      <Headings title="About" />
      <div className="flex justify-center w-full lg:pt-20 pt-20 flex-col lg:gap-y-10 gap-y-16 lg:flex-row">
        <div className="flex justify-start items-start lg:w-[50%] lg:h-min">
          <h3 className="lg:text-4xl text-2xl capitalize tracking-wide">
            Over the years, I have worked on customer-facing products with a
            strong focus on excellent user experience and accessibility
          </h3>
        </div>
        <div className="flex justify-start items-start flex-col gap-y-8 lg:w-[50%] lg:h-min text-sm font-extralight capitalize tracking-wide text-neutral-300">
          <p>
            Software engineer with a strong knowledge of TypeScript, Python, and
            Java. I am passionate about working on meaningful projects that have
            a positive impact on people&apos; lives.
          </p>
          <p>
            I have hands-on experience working on high-traffic, customer-facing
            products and prioritize building clean, maintainable codebases that
            enable continuous improvement and scalability.
          </p>
          <p>
            I hold a degree in Bachelor of Science in Computer Science from
            Savitribai Phule Pune University in Pune.
          </p>
          <p>
            I am fluent in English, Hindi and French and have experience working
            and studying in a tense environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

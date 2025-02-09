import About from "./_components/About";
import HeroSection from "./_components/Hero";
import Projects from "./_components/Projects";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full min-h-screen text-white font-unbounded lg:gap-y-52 gap-y-32 py-10">
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;

const Work = () => {
  return (
    <div className="flex justify-start items-start w-full min-h-screen  text-white font-unbounded bg-neutral-900 lg:p-20 p-8">
      <div className="flex justify-start items-start w-full flex-col lg:gap-y-4 gap-y-6">
        <h1 className="lg:text-4xl text-2xl font-semibold">
          nXtribe IT Solutions
        </h1>
        <div className="flex items-start justify-start flex-col text-xs gap-y-2">
          <h4>Jr. Software Engineer</h4>
          <h4>2024 - Current</h4>
        </div>
        <ul className="text-white/60 font-light list-disc lg:mt-2 space-y-4 lg:text-base text-sm">
          <li>Develop, test, and maintain web and mobile applications.</li>
          <li>
            Write clean, scalable, and efficient code using modern programming
            languages.
          </li>
          <li>
            Build and manage databases, write queries, and optimize data access.
          </li>
          <li>
            Integrate third-party APIs and services (payment gateways,
            government APIs).
          </li>
          <li>
            Create and maintain RESTful APIs for front-end back-end
            communication.
          </li>
          <li>
            Collaborate with cross-functional teams including designers and
            product managers.
          </li>
          <li>
            Write unit and integration tests to ensure application stability.
          </li>
          <li>
            Debug and troubleshoot application issues in development and
            production.
          </li>
          <li>Document technical processes, APIs, and application flows.</li>
        </ul>
      </div>
    </div>
  );
};

export default Work;

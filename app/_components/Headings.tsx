interface HeadingsProps {
  title: string;
}

const Headings = ({ title }: HeadingsProps) => {
  return (
    <div className="flex justify-between items-center w-full border-b-2 border-opacity-50 hover:border-opacity-100 border-violet-500 duration-500">
      <h2
        id={title.toLowerCase()}
        className="lg:text-6xl text-4xl font-medium uppercase tracking-wider lg:pb-4 pb-2 cursor-pointer"
      >
        {title}
      </h2>
      <div />
    </div>
  );
};

export default Headings;

type HeadingProps = {
  sectionName: string;
  subName: string;
};

function Heading({ sectionName, subName }: HeadingProps) {
  return (
    <div className="relative flex text-center mb-5">
      <h2 className="text-gray-200 max-[400px]:text-[calc(1.95rem+6vw)] max-lg:text-[calc(1.95rem+8.4vw)] text-[calc(1.95rem+6vw)] font-bold opacity-40 uppercase w-full">
        {sectionName}
      </h2>
      <div className="absolute self-center text-4xl font-bold w-full">
        {subName}
      </div>
    </div>
  );
}

export default Heading;

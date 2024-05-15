import Heading from "../General/Heading/Heading";

type workObject = {
  id: number;
  name: string;
  category: string;
  image: string;
  link?: string;
};

const works: workObject[] = [
  {
    id: 1,
    name: "Todo Web",
    category: "Full Stack",
    image: "/todo-react.jpg",
  },
  {
    id: 2,
    name: "Nowat",
    category: "Front End",
    image: "/nowat-shopping-web.jpg",
  },
  {
    id: 3,
    name: "Nowat",
    category: "Front End",
    image: "/nowat-shopping-web.jpg",
  },
  {
    id: 4,
    name: "Nowat",
    category: "Front End",
    image: "/nowat-shopping-web.jpg",
  },
] as const;

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="bg-gray-100 px-24 py-[72px]">
        <div className="container mx-auto">
          <Heading sectionName="Portfolio" subName="My Work" />
          <div className="w-full">
            <ul className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-5">
              {works.map((work) => {
                return (
                  <li key={work.id} className="">
                    <a
                      href={work.link}
                      className={`group/work-link-${work.id} relative`}
                    >
                      <img src={work.image} alt="" className="w-full h-full" />
                      <div
                        className={`absolute flex flex-col justify-center text-center top-0 left-0 w-full h-full bg-black/70 invisible opacity-0 group-hover/work-link-${work.id}:visible group-hover/work-link-${work.id}:opacity-100 transition-all duration-300`}
                      >
                        <h5
                          className={`text-white text-xl opacity-0 group-hover/work-link-${work.id}:opacity-100 transition-all duration-500`}
                        >
                          {work.name}
                        </h5>
                        <div
                          className={`text-neutral-100 opacity-0 group-hover/work-link-${work.id}:opacity-100 transition-all duration-500`}
                        >
                          {work.category}
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

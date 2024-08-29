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
    name: "Library Web App",
    category: "Full Stack",
    image: "/library-app-pern.jpg",
    link: "https://library-app-pern.vercel.app/",
  },
  {
    id: 2,
    name: "Todo Web",
    category: "Full Stack",
    image: "/todo-react.jpg",
    link: "http://todolist-774fc.web.app",
  },
  {
    id: 3,
    name: "Nowat",
    category: "Front End",
    image: "/nowat-shopping-web.jpg",
    link: "https://youtu.be/sNdDc6wF3yM",
  },
  {
    id: 4,
    name: "Calculator React",
    category: "Front End",
    image: "/calculator-react.jpg",
    link: "https://youtu.be/sWqwD73u9nM",
  },
  {
    id: 5,
    name: "Plant Play",
    category: "Flutter",
    image: "/plant-play-full.jpg",
    link: "https://youtu.be/2o48N3CODHU?si=CAQ8zOAGhap1GLla",
  },
  {
    id: 6,
    name: "Tiny Agent",
    category: "Game Dev",
    image: "/tiny-agent.jpg",
    link: "https://youtu.be/WISVtyGuBGo",
  },
  {
    id: 7,
    name: "VR FPS Game",
    category: "Game Dev",
    image: "/vr-fps-game.jpg",
    link: "https://youtu.be/EJfr6N9M9-s",
  },
  {
    id: 8,
    name: "Tangthai in Amazon",
    category: "Game Dev",
    image: "/tang-thai-in-amazon.jpg",
    link: "https://youtu.be/QYhCsCSH4lw",
  },
  {
    id: 9,
    name: "Pet Planet",
    category: "Game Dev",
    image: "/PetPlanet.png",
  },
  {
    id: 10,
    name: "Blocken",
    category: "Game Dev",
    image: "/Blocken.png",
  },
] as const;

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="bg-gray-100 px-6 lg:px-24 py-[72px]">
        <div className="container mx-auto">
          <Heading sectionName="Portfolio" subName="My Work" />
          <div className="w-full">
            <ul className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-5">
              {works.map((work) => (
                <li key={work.id} className="">
                  <a
                    href={work.link}
                    target="_blank"
                    className={`group relative`}
                  >
                    <img
                      src={work.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute flex flex-col justify-center text-center top-0 left-0 w-full h-full bg-black/70 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300`}
                    >
                      <h5
                        className={`text-white text-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                      >
                        {work.name}
                      </h5>
                      <div
                        className={`text-neutral-100 opacity-0 group-hover:opacity-100 transition-all duration-500`}
                      >
                        {work.category}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

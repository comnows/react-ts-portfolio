import { FaDownload } from "react-icons/fa6";

function About() {
  return (
    <section id="about" className="py-8">
      <div className="container mx-auto px-12">
        <div className="relative flex text-center">
          <h2 className="text-gray-200 text-[calc(1.95rem+8.4vw)] xl:text-[8.25rem] font-bold opacity-40 uppercase w-full">
            about me
          </h2>
          <div className="absolute self-center text-4xl font-bold w-full">
            Know Me More
          </div>
        </div>
        <div className="border-b pb-[30px] mb-[30px]">
          <h3 className="text-3xl font-bold mb-3">
            I'm{" "}
            <span className="text-yellow-400">Watthanandh Luaengtawekul,</span>{" "}
            a Web Developer
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="border-b pb-[30px] mb-[30px]">
          <div className="flex">
            <ul className="flex-1">
              <li className="py-2">
                <span className="inline-block min-w-[100px] font-bold">
                  Birthday:{" "}
                </span>
                20 Aug 2001
              </li>
              <li className="py-2">
                <span className="inline-block min-w-[100px] font-bold">
                  Age:{" "}
                </span>
                22
              </li>
              <li className="py-2">
                <span className="inline-block min-w-[100px] font-bold">
                  Email:{" "}
                </span>
                watthanandh.l@gmail.com
              </li>
              <li className="py-2">
                <span className="inline-block min-w-[100px] font-bold">
                  Phone:{" "}
                </span>
                +66 081 964 2050
              </li>
            </ul>
            <ul className="flex-1">
              <li className="py-2">
                <span className="inline-block min-w-[100px] font-bold">
                  Address:{" "}
                </span>
                Bangkok, Thailand
              </li>
              <li className="py-2">
                <span className="inline-block min-w-[100px] font-bold">
                  Study:{" "}
                </span>
                King Mongkut's University of Technology Thonburi
              </li>
              <li className="py-2">
                <span className="inline-block min-w-[100px] font-bold">
                  Degree:{" "}
                </span>
                Bachelor
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            href=""
            className="group/download-cv relative inline-block border border-yellow-400 rounded-full py-4 pl-[35px] pr-[70px] overflow-hidden before:absolute before:bg-yellow-400 before:inset-0 before:-z-10 before:translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
          >
            <span className="font-bold uppercase transition-colors duration-300 group-hover/download-cv:text-white">
              Download CV
            </span>
            <span className="absolute flex justify-center items-center text-lg w-14 h-14 bottom-0 right-[-1px] rounded-full bg-yellow-400">
              <FaDownload color="white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

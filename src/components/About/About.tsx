import Skill from "./Skill/Skill";
import Experience from "./Experience/Experience";
import Heading from "../General/Heading/Heading";

import myCv from "../../assets/cv-watthanandh.pdf";
import myResume from "../../assets/resume-watthanandh.pdf";
import DownloadButton from "./DownloadButton";

function About() {
  return (
    <section id="about">
      <div className="bg-white">
        <div className="container mx-auto px-6 lg:px-24 pt-9 pb-[72px]">
          <Heading sectionName="About Me" subName="Know Me More" />
          <div className="border-b pb-[30px] mb-[30px]">
            <h3 className="text-3xl font-bold mb-3">
              Hi, I'm{" "}
              <span className="text-yellow-400">
                Watthanandh Luaengtawekul,
              </span>{" "}
              a Web/Game Developer
            </h3>
            <p className="mb-3">
              I'm graduate with a degree in Bachelor of Science in Technology
              Media, specializing in Game Development from King Mongkut's
              University of Technology Thonburi. Although my academic focus was
              on a game development, I've transitioned from game development
              into web development field. I've been polishing my skills and
              expanding my knowledge over the past year.
            </p>
            <p className="mb-3">
              My passion for programming began with an interested in game
              development, then I discovered a web development that interesting
              me. So I decided to applying my game development skills to deep
              dive into this field.{" "}
            </p>
            <p>
              As a recent graduate, I'm eager to continue learning and growing
              in the field of web development to keep my skills sharp and stay
              updated with the latest industry trends.
            </p>
          </div>
          <div className="border-b pb-[30px] mb-[30px]">
            <div className="flex max-md:flex-col">
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
              <ul className="flex-1 md:ml-[50px]">
                <li className="py-2">
                  <span className="inline-block min-w-[100px] font-bold">
                    Nationality:{" "}
                  </span>
                  Thai
                </li>
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
            <DownloadButton fileLink={myCv} name="Download CV" />
            <DownloadButton fileLink={myResume} name="Resume" />
          </div>
        </div>
      </div>
      <Skill />
      <Experience />
    </section>
  );
}

export default About;

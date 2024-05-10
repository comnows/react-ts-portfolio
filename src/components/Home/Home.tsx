import profilePic from "/profile.jpg";
import { FaAngleDown } from "react-icons/fa6";

function Home() {
  return (
    <section
      id="home"
      className="relative h-full [transform-style:preserve-3d] -z-10"
    >
      <img
        src="/home-bg.jpg"
        alt=""
        className="absolute w-full h-full object-cover -z-20 [transform:translateZ(-1px)_scale(2)]"
      />
      <div className="absolute bg-black opacity-65 -z-10 w-full h-full"></div>
      <div className="relative bg-none container flex justify-center min-h-screen mx-auto">
        <div className="flex items-center gap-20 my-auto">
          <div className="relative w-[250px] shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] overflow-hidden animate-morph">
            <img
              src={profilePic}
              alt="Profile Pic Not Found"
              className="relative -z-10"
            />
          </div>
          <div>
            <h3 className="text-white text-5xl font-extrabold mb-4">
              Watthanandh <br /> Luaengtawekul
            </h3>
            <div className="text-gray-300">
              I am a passionate software developer.
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-5 left-1/2 text-white text-xl text-center w-8 h-8"
        >
          <span className="relative animate-slide-down">
            <FaAngleDown className="inline-block" />
          </span>
        </a>
      </div>
      {/* <div className="absolute bg-[url('/home-bg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed top-0 left-0 w-full h-full"></div> */}
      {/* <div className="absolute bg-black opacity-65 w-full h-full z-10"></div> */}
      {/* <div className="relative bg-none container flex justify-center min-h-screen z-20 mx-auto">
          <div className="flex items-center gap-20 my-auto">
            <div className="relative w-[250px] shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] overflow-hidden animate-morph">
              <img
                src={profilePic}
                alt="Profile Pic Not Found"
                className="relative -z-10"
              />
            </div>
            <div>
              <h3 className="text-white text-5xl font-extrabold mb-4">
                Watthanandh <br /> Luaengtawekul
              </h3>
              <div className="text-gray-300">
                I am a passionate software developer.
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="absolute bottom-5 left-1/2 text-white text-xl text-center w-8 h-8"
          >
            <span className="relative animate-slide-down">
              <FaAngleDown className="inline-block" />
            </span>
          </a>
        </div> */}
    </section>
  );
}

export default Home;

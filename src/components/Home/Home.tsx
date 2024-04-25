import profilePic from "/profile.jpg";
import { FaAngleDown } from "react-icons/fa6";

function Home() {
  return (
    <section id="home">
      <div className="relative">
        <div className="absolute bg-[url('/home-bg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed top-0 left-0 w-full h-full"></div>
        <div className="absolute bg-black opacity-65 w-full h-full z-10"></div>
        <div className="relative bg-none container flex justify-center min-h-screen z-20 mx-auto">
          <div className="flex items-center gap-20 my-auto">
            <div className="w-[250px] rounded-full overflow-hidden">
              <img src={profilePic} alt="Profile Pic Not Found" />
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
            href=""
            className="absolute bottom-5 left-1/2 text-white text-xl text-center"
          >
            <span className="relative animate-slide-down">
              <FaAngleDown />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

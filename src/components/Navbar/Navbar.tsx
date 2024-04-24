import { FaHouse, FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="fixed flex items-center w-[350px] left-0 top-0 bottom-0 bg-yellow-400 shadow-[1px_0_10px_rgba(0,0,0,0.2)] px-[70px]">
      <div>
        <h1 className="text-white text-3xl font-black tracking-[5px]">NOWAT</h1>
        <ul className="flex flex-col w-full text-amber-100 leading-8 py-12">
          <li>
            <a
              className="flex items-center gap-2 transition hover:text-white hover:translate-x-4"
              href="#home"
            >
              <span>
                <FaHouse />
              </span>
              <div className="">Home</div>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 transition hover:text-white hover:translate-x-4"
              href="#about"
            >
              <span>
                <FaUser />
              </span>
              <div className="">About</div>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 transition hover:text-white hover:translate-x-4"
              href="#portfolio"
            >
              <span>
                <FaBriefcase />
              </span>
              <div className="">Portfolio</div>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 transition hover:text-white hover:translate-x-4"
              href="#contact"
            >
              <span>
                <FaEnvelopeOpen />
              </span>
              <div className="">Contact</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { FaHouse, FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa6";
import HamburgerButton from "./HamburgerButton/HamburgerButton";

function Navbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleLinkClick = () => {
    setIsMenuShow(false);
  };

  return (
    <nav className="fixed flex items-center w-[350px] h-full max-lg:w-full max-lg:h-[50px] left-0 top-0 lg:bottom-0 bg-yellow-400 shadow-[1px_0_10px_rgba(0,0,0,0.2)] lg:px-[70px] z-50">
      <div className="relative max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full max-lg:px-5">
        <h1 className="text-white text-3xl max-lg:text-xl font-black tracking-[5px]">
          NOWAT
        </h1>
        <ul
          className={
            "max-lg:absolute max-lg:top-[35px] max-lg:inset-x-0 max-lg:bg-yellow-400 max-lg:p-4 max-lg:origin-top max-lg:transition flex flex-col w-full text-amber-100 leading-8 py-12" +
            (isMenuShow ? " max-lg:scale-y-100" : " max-lg:scale-y-0")
          }
        >
          <li>
            <a
              className="flex items-center gap-2 transition lg:hover:text-white lg:hover:translate-x-4"
              href="#home"
              onClick={handleLinkClick}
            >
              <span>
                <FaHouse />
              </span>
              <div className="">Home</div>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 transition lg:hover:text-white lg:hover:translate-x-4"
              href="#about"
              onClick={handleLinkClick}
            >
              <span>
                <FaUser />
              </span>
              <div className="">About</div>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 transition lg:hover:text-white lg:hover:translate-x-4"
              href="#portfolio"
              onClick={handleLinkClick}
            >
              <span>
                <FaBriefcase />
              </span>
              <div className="">Portfolio</div>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 transition lg:hover:text-white lg:hover:translate-x-4"
              href="#contact"
              onClick={handleLinkClick}
            >
              <span>
                <FaEnvelopeOpen />
              </span>
              <div className="">Contact</div>
            </a>
          </li>
        </ul>
        <HamburgerButton
          isMenuShow={isMenuShow}
          setIsMenuShow={setIsMenuShow}
        />
      </div>
    </nav>
  );
}

export default Navbar;

import { FaCaretRight } from "react-icons/fa6";

function Skill() {
  return (
    <div className="bg-gray-100 px-6 lg:px-24 py-[72px]">
      <div className="container mx-auto">
        <div className="flex max-md:flex-col justify-center w-full">
          <div className="flex-1 max-md:mb-[60px]">
            <div className="text-xl font-bold mb-10">Knowledge</div>
            <div className="text-gray-500">
              <ul>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">HTML, CSS, Tailwind CSS</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">React, JavaScript, TypeScript</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">NodeJS, MySQL, Firebase</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">Unity</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 md:ml-[50px]">
            <div className="text-xl font-bold mb-10">Interests</div>
            <div className="text-gray-500">
              <ul>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">
                    Coding: Developed several personal web projects using React
                  </span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">
                    Japanese Language: Studying 15 minutes daily, familiar with
                    basic phrases
                  </span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">
                    Physical Exercise: running for 30-45 minutes 3 days a week
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;

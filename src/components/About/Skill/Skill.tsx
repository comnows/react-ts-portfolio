import { FaCaretRight } from "react-icons/fa6";

function Skill() {
  return (
    <div className="bg-gray-100 px-24 py-[72px]">
      <div className="container mx-auto">
        <div className="flex justify-center w-full">
          <div className="flex-1">
            <div className="text-xl font-bold mb-10">Knowledge</div>
            <div className="text-gray-500">
              <ul>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">HTML, CSS, JavaScript</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">React, NodeJS</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">Tailwind CSS</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">MySQL, Firebase</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 ml-[50px]">
            <div className="text-xl font-bold mb-10">Interests</div>
            <div className="text-gray-500">
              <ul>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">Something</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">Something</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4">Something</span>
                </li>
                <li className="leading-7">
                  <FaCaretRight color="black" className="inline-block" />
                  <span className="pl-4 uppercase">Football!</span>
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

import React from "react";

function Experience() {
  return (
    <div className="bg-white px-6 lg:px-24 py-[72px]">
      <div className="container mx-auto">
        <div className="flex max-xl:flex-col justify-center w-full">
          <div className="flex-1 max-xl:mb-[60px]">
            <div className="text-xl font-bold mb-10">Education</div>
            <div className="">
              <ul className="relative before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:bg-gray-200">
                <li className="relative before:absolute before:w-[18px] before:h-[18px] before:-left-[9px] before:max-sm:top-[14px] before:top-[calc(50%-9px)] before:border before:rounded-full before:border-zinc-200 before:bg-white">
                  <div className="flex max-sm:flex-col items-center max-sm:gap-4 gap-10 pl-5">
                    <div className="max-sm:w-full w-1/2">
                      <span className="inline-block whitespace-nowrap bg-zinc-100 text-gray-500 text-sm px-7 py-3 rounded-full">
                        2019 - 2023
                      </span>
                    </div>
                    <div className="max-sm:w-full w-1/2">
                      <h3 className="font-semibold pb-1">
                        King Mongkut's University of Technology Thonburi
                      </h3>
                      <span className="text-gray-500 text-sm">
                        Bachelor Degree in Media Technology
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 xl:ml-[50px]">
            <div className="text-xl font-bold mb-10">Experience</div>
            <div className="">
              <ul className="relative before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:bg-gray-200">
                <li className="relative before:absolute before:w-[18px] before:h-[18px] before:-left-[9px] before:max-sm:top-[14px] before:top-[calc(50%-9px)] before:border before:rounded-full before:border-zinc-200 before:bg-white">
                  <div className="flex max-sm:flex-col items-center max-sm:gap-4 gap-10 pl-5">
                    <div className="max-sm:w-full w-1/2">
                      <span className="inline-block whitespace-nowrap bg-zinc-100 text-gray-500 text-sm px-7 py-3 rounded-full">
                        Jul 2022 - Dec 2022
                      </span>
                    </div>
                    <div className="max-sm:w-full w-1/2">
                      <h3 className="font-semibold pb-1">
                        Garena {"(Thailand)"}
                      </h3>
                      <span className="text-gray-500 text-sm">
                        Game Developer {"(Intern)"}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

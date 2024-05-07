import todoReactPic from "/todo-react.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="bg-gray-100 px-24 py-[72px]">
        <div className="container mx-auto">
          <div className="relative flex text-center mb-5">
            <h2 className="text-gray-300 text-[calc(1.95rem+8.4vw)] xl:text-[8.25rem] font-bold opacity-40 uppercase w-full">
              Portfolio
            </h2>
            <div className="absolute self-center text-4xl font-bold w-full">
              My Work
            </div>
          </div>
          <div className="w-full">
            <ul className="grid grid-cols-3 gap-5">
              <li className="h-[220px]">
                <a href="" className="group/work-link-1 relative">
                  <img src={todoReactPic} alt="" className="w-full h-full" />
                  <div className="absolute flex flex-col justify-center text-center top-0 left-0 w-full h-full bg-black invisible opacity-0 group-hover/work-link-1:visible group-hover/work-link-1:opacity-70 transition-all duration-300">
                    <h5 className="text-white text-xl opacity-0 group-hover/work-link-1:opacity-100 transition-all duration-500">
                      Project Title
                    </h5>
                    <div className="text-neutral-100 opacity-0 group-hover/work-link-1:opacity-100 transition-all duration-500">
                      Category
                    </div>
                  </div>
                </a>
              </li>
              <li className="h-[220px]">
                <a href="" className="group/work-link-2 relative">
                  <img src={todoReactPic} alt="" className="w-full h-full" />
                  <div className="absolute flex flex-col justify-center text-center top-0 left-0 w-full h-full bg-black invisible opacity-0 group-hover/work-link-2:visible group-hover/work-link-2:opacity-70 transition-all duration-300">
                    <h5 className="text-white text-xl opacity-0 group-hover/work-link-2:opacity-100 transition-all duration-500">
                      Project Title
                    </h5>
                    <div className="text-neutral-100 opacity-0 group-hover/work-link-2:opacity-100 transition-all duration-500">
                      Category
                    </div>
                  </div>
                </a>
              </li>
              <li className="h-[220px]">
                <a href="" className="group/work-link-3 relative">
                  <img src={todoReactPic} alt="" className="w-full h-full" />
                  <div className="absolute flex flex-col justify-center text-center top-0 left-0 w-full h-full bg-black invisible opacity-0 group-hover/work-link-3:visible group-hover/work-link-3:opacity-70 transition-all duration-300">
                    <h5 className="text-white text-xl opacity-0 group-hover/work-link-3:opacity-100 transition-all duration-500">
                      Project Title
                    </h5>
                    <div className="text-neutral-100 opacity-0 group-hover/work-link-3:opacity-100 transition-all duration-500">
                      Category
                    </div>
                  </div>
                </a>
              </li>
              <li className="h-[220px]">
                <a href="" className="group/work-link-4 relative">
                  <img src={todoReactPic} alt="" className="w-full h-full" />
                  <div className="absolute flex flex-col justify-center text-center top-0 left-0 w-full h-full bg-black invisible opacity-0 group-hover/work-link-4:visible group-hover/work-link-4:opacity-70 transition-all duration-300">
                    <h5 className="text-white text-xl opacity-0 group-hover/work-link-4:opacity-100 transition-all duration-500">
                      Project Title
                    </h5>
                    <div className="text-neutral-100 opacity-0 group-hover/work-link-4:opacity-100 transition-all duration-500">
                      Category
                    </div>
                  </div>
                </a>
              </li>
              <li className="h-[220px]">
                <a href="" className="group/work-link-5 relative">
                  <img src={todoReactPic} alt="" className="w-full h-full" />
                  <div className="absolute flex flex-col justify-center text-center top-0 left-0 w-full h-full bg-black invisible opacity-0 group-hover/work-link-5:visible group-hover/work-link-5:opacity-70 transition-all duration-300">
                    <h5 className="text-white text-xl opacity-0 group-hover/work-link-5:opacity-100 transition-all duration-500">
                      Project Title
                    </h5>
                    <div className="text-neutral-100 opacity-0 group-hover/work-link-5:opacity-100 transition-all duration-500">
                      Category
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

import { useState } from "react";
import projects from "../data/projects.data.json";
import { projectImages } from "../assets";

const Portfolio = ({ separate }: { separate?: boolean }) => {
  const [loadMore, setLoadMore] = useState(false);

  return (
    <main
      className={`bg-[#DAF5F0] ${
        !separate ? "border-t-[4px]" : ""
      } border-x-[4px]  border-black py-10 gap-4 flex flex-col justify-center items-center`}
    >
      <div className="text-3xl font-semibold">Portfolio</div>
      <div className="flex flex-row flex-wrap lg:gap-20 gap-10 justify-center">
        {projects.slice(0, loadMore ? projects.length : 6).map((project, i) => (
          <div
            key={i}
            className={`lg:mx-0 mx-5 group/item cursor-pointer bg-[${project.bg}] text-xl max-w-[346px] ease-in-out duration-100 rounded-md flex w-full text-black shadow-black border-2 border-black`}
          >
            <div className="flex flex-col gap-3 pb-5 w-inherit">
              <img
                alt="Project Image"
                src={projectImages[project.img]}
                className="h-[187px] rounded-t-sm"
              />
              <div className="px-5 font-semibold">{project.title}</div>
              <p className="px-5 text-base">{project.about}</p>
              <div className="flex flex-row flex-wrap px-5 gap-3 text-base">
                {project.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 max-w-[346px] ease-in-out duration-100 rounded-md text-black shadow-black border-2 border-black"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-5 mt-2">
                <a
                  target="_blank"
                  className={`flex max-w-[100px] pr-6 w-full bg-[#90EE90] items-center justify-center gap-2 font-semibold text-base px-3 py-[6px] ease-in-out duration-100 shadow-sp-sm rounded-md p-2 text-black shadow-black border-2 border-black`}
                  href={project.link}
                >
                  <span className="w-[20px]">🌐︎</span>{" "}
                  <span className="w-[40px] text-center pl-1">Live</span>
                </a>
                <a
                  target="_blank"
                  className={`flex max-w-[100px] pr-6 w-full bg-[#87CEEB] items-center justify-center gap-2 font-semibold text-base px-3 py-[6px] ease-in-out duration-100 shadow-sp-sm rounded-md p-2 text-black shadow-black border-2 border-black`}
                  href={project.repo}
                >
                  <span className="w-[20px]">👨🏻‍💻</span>{" "}
                  <span className="w-[40px] text-center pl-1">Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {projects.length > 6 ? (
        <div className="flex justify-center mt-5">
          <button
            id="setLoadMoreProjects"
            type="submit"
            onClick={() => setLoadMore(true)}
            className={`${
              loadMore ? "hidden" : "block"
            } ease-in-out duration-100 text-xl font-semibold shadow border-2 border-black rounded-md p-2 bg-[#FDFD96]`}
          >
            Load more...
          </button>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Portfolio;

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
            className={`lg:mx-0 mx-5 group/item cursor-pointer bg-[${project.bg}] text-xl lg:w-[346px] w-[280px] h-[450px] ease-in-out duration-100 shadow-unset-hover rounded-md flex w-full text-black shadow-black border-2 border-black`}
          >
            <div className="flex flex-col gap-3 pb-5">
              <div className="ease-in-out duration-200 flex flex-col gap-5 justify-center items-center absolute lg:w-[346px] w-[280px] rounded-md h-[450px] bg-black-alpha opacity-0 group-hover/item:opacity-[1]">
                <a
                  target="_blank"
                  className={`flex max-w-[120px] pr-6 w-full bg-[#90EE90] items-center justify-center gap-2 font-semibold text-xl p-2 ease-in-out duration-100 shadow rounded-md p-2 text-black shadow-black border-2 border-black`}
                  href={project.link}
                >
                  <span className="w-[20px]">🌐︎</span>{" "}
                  <span className="w-[40px] pl-1">Live</span>
                </a>
                <a
                  target="_blank"
                  className={`flex max-w-[120px] pr-6 w-full bg-[#87CEEB] items-center justify-center gap-2 font-semibold text-xl p-2 ease-in-out duration-100 shadow rounded-md p-2 text-black shadow-black border-2 border-black`}
                  href={project.repo}
                >
                  <span className="w-[20px]">👨🏻‍💻</span>{" "}
                  <span className="w-[40px] pl-1">Code</span>
                </a>
              </div>
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

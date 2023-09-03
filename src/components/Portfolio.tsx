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
          <a
            key={i}
            target="_blank"
            href={project.link}
            className={`bg-[${project.bg}] text-xl max-w-[346px] ease-in-out duration-100 shadow rounded-md flex w-full text-black shadow-black border-2 border-black`}
          >
            <div className="flex flex-col gap-3 pb-5">
              <img src={projectImages[project.img]} className="h-[187px] rounded-t-sm" />
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
          </a>
        ))}
      </div>
      {projects.length > 6 ? (
        <div className="flex justify-center mt-5">
          <button
            id="setLoadMore"
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

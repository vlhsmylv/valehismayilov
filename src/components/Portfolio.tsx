import { useState } from "react";
import projects from "../data/projects.data.json";
import { projectImages } from "../assets";

const Portfolio = ({ separate }: { separate?: boolean }) => {
  const [loadMore, setLoadMore] = useState(false);

  return (
    <section
      id="portfolio"
      className={`bg-[#DAF5F0] ${
        !separate ? "border-t-[4px]" : ""
      } border-x-[4px]  border-black py-10 gap-4 flex flex-col justify-center items-center`}
    >
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <ul className="flex flex-row flex-wrap lg:gap-20 gap-10 justify-center">
        {projects.slice(0, loadMore ? projects.length : 6).map((project, i) => (
          <li
            id={`project-${project.id}`}
            key={i}
            className={`lg:mx-0 mx-5 group/item bg-[${project.bg}] text-xl max-w-[346px] ease-in-out duration-100 rounded-md flex w-full text-black shadow-black border-2 border-black`}
          >
            <div className="flex flex-col gap-3 pb-5">
              <img
                alt={project.title}
                src={projectImages[project.img]}
                width={342}
                height={187}
                className="rounded-t-sm object-fit"
              />
              <div className="px-5 font-semibold">{project.title}</div>
              <p className="px-5 text-base">{project.about}</p>
              <div className="flex flex-row flex-wrap px-5 gap-3 text-base">
                {project.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="cursor-default px-2 py-1 max-w-[346px] ease-in-out duration-100 rounded-md text-black shadow-black border-2 border-black"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex justify-start px-5 gap-3 mt-2">
                <a
                  title={`Live view link of ${project.title} project`}
                  id={`live-link-${project.id}`}
                  aria-labelledby={`live-link-${project.id}`}
                  target="_blank"
                  className={`external flex max-w-[100px] pr-6 w-full bg-[#90EE90] items-center justify-center gap-2 font-semibold text-base px-3 py-[6px] ease-in-out duration-100  rounded-md p-2 text-black shadow-black border-2 border-black`}
                  href={project.link}
                >
                  <span className="w-[20px]">🌐︎</span>{" "}
                  <span className="w-[40px] text-center pl-1">Live</span>
                </a>
                <a
                  title={`Github Repo link of ${project.title} project`}
                  id={`repo-link-${project.id}`}
                  aria-labelledby={`repo-link-${project.id}`}
                  target="_blank"
                  className={`external flex max-w-[100px] pr-6 w-full bg-[#87CEEB] items-center justify-center gap-2 font-semibold text-base px-3 py-[6px] ease-in-out duration-100  rounded-md p-2 text-black shadow-black border-2 border-black`}
                  href={project.repo}
                >
                  <span className="w-[20px]">👨🏻‍💻</span>{" "}
                  <span className="w-[40px] text-center pl-1">Code</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
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
    </section>
  );
};

export default Portfolio;

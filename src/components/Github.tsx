import { useEffect, useState } from "react";
import skills from "../data/skills.data.json";
import axios from "axios";
import { randomColorPicker } from "../lib/generators.lib";
import MySkillLogo from "./MySkillsComponents/MySkillLogo.MySkillComponent";

interface Repo {
  language: string;
  html_url: string;
  name: string;
  description: string;
  size: number;
  stargazers_count: number;
}

const Github = ({ separate }: { separate?: boolean }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: __repos__ } = await axios.get(
        "https://api.github.com/users/vlhsmylv/repos"
      );

      setRepos(__repos__);
    })();
  }, []);

  return (
    <section
      className={`bg-[#FCDFFF] ${
        !separate ? "border-t-[4px]" : ""
      } border-x-[4px]  border-black py-10 gap-4 flex flex-col justify-center items-center`}
    >
      <div className="text-3xl font-semibold">Github</div>
      <div
        id="repos"
        className="flex flex-row flex-wrap lg:gap-20 gap-10 justify-center"
      >
        {repos &&
          repos.slice(0, loadMore ? repos.length : 6).map((repo, i) => {
            if (repo.language !== "Python" && repo.language) {
              return (
                <a
                  key={i}
                  target="_blank"
                  href={repo.html_url}
                  className="bg-gray-100 text-xl max-w-[346px] ease-in-out duration-100 shadow rounded-md flex w-full text-black shadow-black border-2 border-black"
                >
                  <div className="flex flex-col gap-3 py-5 w-full">
                    <div className="px-5 font-semibold flex gap-2 items-center">
                      <i className="bx bxs-book-bookmark"></i>
                      {repo.name.length > 22
                        ? `${repo.name.slice(0, 19)}...`
                        : repo.name}
                    </div>
                    <div className="px-5">
                      {repo.description
                        ? repo.description
                        : "Doesn't have description"}
                    </div>
                    <div className="flex flex-row justify-center flex-wrap px-5 gap-3 text-base">
                      {skills.map((skill, i) => {
                        if (skill.title === repo.language) {
                          return (
                            <div
                              key={i}
                              className={`flex items-center justify-center gap-2 font-semibold cursor-pointer text-xl p-2 max-w-[350px] ease-in-out duration-100 rounded-md p-2 text-black border-2 border-black bg-[${randomColorPicker()}]`}
                            >
                              <MySkillLogo imgKey={skill.title} /> {skill.title}
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="flex justify-between items-center px-5">
                      <div className="text-base flex items-center gap-1">
                        <i className="bx bxs-star text-orange-500"></i>
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="text-base">{repo.size}KB</div>
                    </div>
                  </div>
                </a>
              );
            }
          })}
      </div>
      {repos.length > 6 ? (
        <div className="flex justify-center mt-5">
          <button
            id="setLoadMoreRepos"
            type="submit"
            onClick={() => setLoadMore(true)}
            className={`${
              loadMore ? "hidden" : "block"
            } ease-in-out duration-100 text-xl font-semibold shadow border-2 border-black rounded-md p-2 bg-[#87CEEB]`}
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

export default Github;

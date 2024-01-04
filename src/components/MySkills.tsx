import skills from "../data/skills.data.json";
import { randomColorPicker } from "../lib/generators.lib";
import MySkillLogo from "./MySkillsComponents/MySkillLogo.MySkillComponent";

const MySkills = ({ separate }: { separate?: boolean }) => {
  return (
    <section
      id="my-skills"
      className={`bg-[#E3DFF2] ${
        !separate ? "border-t-[4px]" : ""
      } border-x-[4px] border-black py-10 gap-4 flex flex-col justify-center items-center`}
    >
      <h1 className="text-3xl font-semibold">My Skills</h1>
      <ul className="lg:px-0 px-4 mt-3 flex flex-row flex-wrap justify-center gap-7 max-w-[600px]">
        {skills.map((skill, i) => (
          <li
            key={i}
            className={`flex items-center cursor-default justify-center gap-2 font-semibold text-xl p-2 max-w-[350px] ease-in-out duration-100 rounded-md text-black shadow-black border-2 border-black bg-[${randomColorPicker()}]`}
          >
            <MySkillLogo imgKey={skill.title} /> {skill.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;

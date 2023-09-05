import images from "../../data/images.data.json";

const MySkillLogo = ({ imgKey }: { imgKey: string }) => {
  const stack: {
    [id: string]: string;
  } = images.stack;

  return <img alt="" src={stack[imgKey]} className="w-8 h-8" />;
};

export default MySkillLogo;

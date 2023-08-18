import HTML from "../../assets/stack/html-5.png";
import CSS from "../../assets/stack/css-3.png";
import JavaScript from "../../assets/stack/js.png";
import TypeScript from "../../assets/stack/ts.png";
import React from "../../assets/stack/react.png";
import MongoDB from "../../assets/stack/mongo.png";
import NodeJs from "../../assets/stack/node.png";
import ExpressJs from "../../assets/stack/express.png";
import Tailwind from "../../assets/stack/tailwind.svg";
import Bootstrap from "../../assets/stack/bootstrap.png";
import SCSS from "../../assets/stack/sass.png";

const MySkillLogo = ({ imgKey }: { imgKey: string }) => {
  const imgs: {
    [imgKey: string]: string;
  } = {
    HTML,
    CSS,
    JavaScript,
    TypeScript,
    React,
    MongoDB,
    NodeJs,
    ExpressJs,
    Tailwind,
    Bootstrap,
    SCSS,
  };

  return <img src={imgs[imgKey]} className="w-8 h-8" />;
};

export default MySkillLogo;

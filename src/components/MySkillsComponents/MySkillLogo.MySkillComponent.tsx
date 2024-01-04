// import HTML from "../../assets/icons/html.webp";
// import CSS from "../../assets/icons/css.webp";
// import JavaScript from "../../assets/icons/js.webp";
// import TypeScript from "../../assets/icons/ts.webp";
// import NextJs from "../../assets/icons/nextjs.webp";
// import ReactJs from "../../assets/icons/reactjs.webp";
// import MongoDB from "../../assets/icons/mongodb.webp";
// import Firebase from "../../assets/icons/firebase.webp";
// import Prisma from "../../assets/icons/prisma.webp";
// import NodeJs from "../../assets/icons/nodejs.webp";
// import ExpressJs from "../../assets/icons/expressjs.webp";
// import TailwindCSS from "../../assets/icons/tailwindcss.webp";
// import Bootstrap from "../../assets/icons/bootstrap.webp";
// import SCSS from "../../assets/icons/scss.webp";

const MySkillLogo = ({ imgKey }: { imgKey: string }) => {
  const stack: {
    [id: string]: string;
  } = {
    // HTML,
    // CSS,
    // JavaScript,
    // TypeScript,
    // NextJs,
    // ReactJs,
    // MongoDB,
    // Firebase,
    // Prisma,
    // NodeJs,
    // ExpressJs,
    // TailwindCSS,
    // Bootstrap,
    // SCSS
  };

  return <img alt={imgKey} src={stack[imgKey]} className="w-8 h-8" />;
};

export default MySkillLogo;

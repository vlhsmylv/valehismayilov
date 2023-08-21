import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Github from "../components/Github";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills";
import Portfolio from "../components/Portfolio";

const Main = () => {
  return (
    <>
      <Hero />
      <MySkills />
      <Portfolio />
      <Blog />
      <Github />
      <Contact />
    </>
  );
};

export default Main;

// import Blog from "../components/Blog";
import Contact from "../components/Contact";
// import Github from "../components/Github";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills";
import Portfolio from "../components/Portfolio";

// Mixpanel import
import mixpanel from "mixpanel-browser";

mixpanel.init("c0c8c3fe996b5c84bfbf6bc0b23b9177", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

const Main = () => {
  return (
    <>
      <Hero />
      <MySkills />
      <Portfolio />
      {/* <Blog /> */}
      {/* <Github /> */}
      <Contact />
    </>
  );
};

export default Main;

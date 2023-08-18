import ReactDOM from "react-dom/client";

import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import Github from "./components/Github";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/about" element={<Hero />}></Route>
      <Route path="/my-skills" element={<MySkills separate={true} />}></Route>
      <Route path="/portfolio" element={<Portfolio separate={true} />}></Route>
      <Route path="/github" element={<Github separate={true} />}></Route>
      <Route path="/contact" element={<Contact separate={true} />}></Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

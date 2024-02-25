import ReactDOM from "react-dom/client";

import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Github from "./components/Github";
import NotFound from "./components/NotFound";
import AppointmentOnline from "./components/AppointmentOnline";
import AppointmentOffline from "./components/AppointmentOffline";
// import Blog from "./components/Blog";
// import Post from "./components/BlogComponents/Post.BlogComponent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/appointment/online"
          element={<AppointmentOnline />}
        ></Route>
        <Route
          path="/appointment/offline"
          element={<AppointmentOffline />}
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </main>
);

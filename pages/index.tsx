import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Valeh Ismayilov - Personal Website</title>
      </Head>
      <main>
        <div className="left-side-container">
          <img src="/img/me.png" className="user-pfp" />
        </div>
        <div className="right-side-container">
          <div className="user-title">
            valeh{" "}
            <span className="user-title-color-change-section">ismayilov</span>
          </div>
          <div className="user-info">
            <span> web developer </span>·&nbsp;
            <span>
              business inquires&nbsp;&nbsp;:&nbsp;&nbsp;
              <span>
                <a
                  href="mailto:me@valehismayilov.com"
                  className="user-info-email"
                >
                  me@valehismayilov.com
                </a>
              </span>
            </span>
          </div>
          <div className="user-brief">
            Junior Web Developer with good leading ability
          </div>
          <div className="user-media">
            <a
              className="user-media-item"
              href="https://www.linkedin.com/in/valeh-ismayilov-453576224/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              className="user-media-item"
              href="https://github.com/vlhsmylv"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              className="user-media-item"
              href="https://instagram.com/thevismayilov"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              className="user-media-item"
              href="https://www.freelancer.com/u/valehism"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-solid fa-briefcase" />
            </a>
            <Link href="/portfolio">
              <a className="user-media-item-box btn btn-dark">Portfolio</a>
            </Link>
          </div>
          <div id="buy-me-a-coffee" className="secondary-font">
            <a
              href="https://www.buymeacoffee.com/valehism"
              target="_blank"
              rel={"noreferrer"}
              className="text-secondary text-decoration-none"
            >
              <span className="link-handler">Buy me a coffee</span>{" "}
              <i className="fa-solid fa-mug-saucer"></i>{" "}
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

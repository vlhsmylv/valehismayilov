import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Valeh Ismayilov - Personal Website</title>
      </Head>
      <main>
        <div className="left-side-container">
          <img src="/img/me1.png" className="user-pfp" />
        </div>
        <div className="right-side-container">
          <div className="user-title">
            valeh{" "}
            <span className="user-title-color-change-section">ismayilov</span>
          </div>
          <div className="user-info">
            <span
              style={{
                display: "inline-block",
              }}
            >
              <Typewriter
                options={{
                  strings: ["web developer", "student at ada university"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            ·&nbsp;
            <span>
              business inquires&nbsp;&nbsp;:&nbsp;&nbsp;
              <span>
                <a
                  href="mailto:valeh.ismayilov@outlook.com"
                  className="user-info-email"
                >
                  valeh.ismayilov@outlook.com
                </a>
              </span>
            </span>
          </div>
          <div className="user-brief">
            Junior Web Developer with good leading ability
          </div>
          <div className="user-posts">
            <div className="fw-bold fs-3">
              Posts on <a target={"_blank"} rel="noreferrer" href="https://medium.com/@valehismayilov">my blog</a>
            </div>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://medium.com/@valehismayilov/is-it-profitable-to-buy-crypto-or-for-who-it-is-profitable-289c562c492d"
            >
              Is it profitable to buy crypto? or for who it is profitable?
            </a>
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
              href="https://www.freelancer.com/u/valehism"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-solid fa-briefcase" />
            </a>
          </div>
          {/* <div id="buy-me-a-coffee" className="secondary-font">
            <a
              href="https://www.buymeacoffee.com/valehism"
              target="_blank"
              rel={"noreferrer"}
              className="text-secondary text-decoration-none"
            >
              <span className="link-handler">Buy me a coffee</span>{" "}
              <i className="fa-solid fa-mug-saucer"></i>{" "}
            </a>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Home;

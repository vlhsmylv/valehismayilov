import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Valeh Ismayilov - Personal Website</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
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
            <span> web developer </span>·
            <span>
              business inquires:
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
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a className="user-media-item" href="https://github.com/vlhsmylv">
              <i className="fa-brands fa-github" />
            </a>
            <a
              className="user-media-item"
              href="https://instagram.com/thevismayilov"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              className="user-media-item-box btn btn-dark"
              href="https://blog.valehismayilov.com"
            >
              Blog
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

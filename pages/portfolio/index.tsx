import { root } from "../../config/api.config";
import axios from "axios";
import Head from "next/head";
import Work from "../../components/portfolio/Work.component";
import Link from "next/link";
import Header from "../../components/web/Header";
import Footer from "../../components/web/Footer";

const PortfolioIndex = ({ works }: any) => {
  return (
    <>
      <Head>
        <title>Valeh Ismayilov - Portfolio</title>
      </Head>

      <main
        className="d-block"
        style={{
          background: "#343A40",
        }}
      >
        <Header schema="portfolio" />
        <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center pb-5">
          {works.map((work: any, i: number) => (
            <Work key={i} work={work} />
          ))}
        </div>
        <div className="text-center secondary-font pb-5">
          <Link href="https://github.com/vlhsmylv">
            <a className="btn btn-outline-light" target={"_blank"}>
              More on <i className="fa-brands fa-github"></i>
            </a>
          </Link>
        </div>
        <Footer />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data }: any = await axios.get(`${root}/api/get/works`);

  return {
    props: {
      works: data.status ? data.data : [],
    },
  };
};

export default PortfolioIndex;

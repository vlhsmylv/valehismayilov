import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useEffect, useState } from "react";
import AdminDashboard from "../../components/AdminDashboard.admin.component";
import AdminLogin from "../../components/AdminLogin.admin.component";
import { root } from "../../config/api.config";
// create localenv
import { auth, db } from "../../config/firebase.config";

const Admin = ({ posts }: any) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuth(true);
        setIsLoading(false);
      } else {
        setIsAuth(false);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Valeh Ismayilov</title>
      </Head>

      {isLoading ? (
        <div className="fs-3 fw-bold text-center mt-5">Loading...</div>
      ) : (
        <>
          {isAuth ? (
            <AdminDashboard posts={posts} />
          ) : (
            <AdminLogin updateAuth={(auth: boolean) => setIsAuth(auth)} />
          )}
        </>
      )}
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const response: any = await fetch(`${root}/api/posts`);
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default Admin;

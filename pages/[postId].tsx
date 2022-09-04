import Head from "next/head";
import TopSide from "../components/TopSide.component";
import ReactMarkdown from "react-markdown";
import Post from "../components/Post.component";
import { root } from "../config/api.config";

const PostId = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>{post.title} - Valeh Ismayilov</title>
      </Head>

      <main
        style={{
          maxWidth: "600px",
        }}
        className={"m-auto"}
      >
        <TopSide />
        <Post post={post} />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const response: any = await fetch(
    `${root}/api/posts/${query.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};

export default PostId;

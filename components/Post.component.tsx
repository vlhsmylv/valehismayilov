import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Post = ({ post }: any) => {
  return (
    <article id="post" className="mt-4">
      <div className="fs-2 fw-bold text-dark">{post.title}</div>
      <ReactMarkdown className="mt-2">{post.content}</ReactMarkdown>
      <div className="mt-2 float-end text-secondary">{post.date}</div>
    </article>
  );
};

export default Post;

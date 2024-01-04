import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostT } from "../Blog";
import { useEffect, useState } from "react";
import axios from "axios";
import posts from "../../data/posts.data.json";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postSlug } = useParams<{ postSlug: string }>();

  const [post, setPost] = useState<PostT>();
  const [content, setContent] = useState("");

  useEffect(() => {
    const postObj = posts.find((post) => post.slug === postSlug);

    if (post) {
      setPost(postObj);

      (async () => {
        const { data: mdContent } = await axios.get(
          `https://vlhsmylv.github.io/valehismayilov/blog/${postObj?.slug}.md`
        );
        setContent(mdContent);
      })();
    }
  }, [post, postSlug]);

  useEffect(() => {
    setPost({
      banner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbDP4RGpWm7j9k2KwhzFQcSrXEydf2Vj2Egy4AdAWFA&s",
      slug: "new-post",
      title: "New post!",
      date: "23 September, 2023",
      bg: "#FFDB58",
      tags: ["javascript", "website"],
    });
  }, []);

  return (
    <div
      className={`border-x-[4px] border-x-black bg-[${post?.bg}] flex justify-center`}
    >
      <article className={`m-5 lg:w-full max-w-[700px] flex flex-col gap-4`}>
        <h2 className="py-0 text-3xl font-semibold">{post?.title}</h2>
        <p className="py-0 markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </p>
        <div className="flex justify-between items-center">
          <div>{post?.date}</div>
          <div className="flex gap-3">
            {post?.tags.map((tag, i) => (
              <div key={i}>#{tag}</div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;

import { useEffect, useState } from "react";
import { PostT } from "../Blog";
import ContentCollapser from "./PostCard/ContentCollapser.PostCard.BlogComponent";
import axios from "axios";

const PostCard = ({ post }: { post: PostT }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      const { data: mdContent } = await axios.get(
        `https://vlhsmylv.github.io/valehismayilov/blog/${post?.slug}.md`
      );

      setContent(mdContent);
    })();
  }, [post?.slug]);

  return (
    <a
      target="_blank"
      href={`/blog/${post.slug}`}
      className={`bg-[${post.bg}] text-xl max-w-[346px] ease-in-out duration-100 shadow rounded-md flex w-full text-black shadow-black border-2 border-black`}
    >
      <div className="flex flex-col gap-3 pb-5">
        <img src={post.banner} className="h-[187px]" />
        <div className="px-5 font-semibold">{post.title}</div>
        <p className="px-5 text-base">
          <ContentCollapser content={content} />
        </p>
        <div className="px-5 text-base text-end">{post.date}</div>
        <div className="flex flex-row flex-wrap justify-center px-5 gap-3 text-base">
          {post.tags.map((tag, i) => (
            <div key={i}>#{tag}</div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default PostCard;

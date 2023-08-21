import { useState } from "react";
import PostCard from "./BlogComponents/PostCard.BlogComponent";
import posts_json from "../data/posts.data.json";

export interface PostT {
  banner: string;
  slug: string;
  bg: string;
  title: string;
  date: string;
  tags: string[];
}

const Blog = ({ separate }: { separate?: boolean }) => {
  const [posts] = useState<PostT[]>(posts_json);
  const [loadMore, setLoadMore] = useState(false);

  return (
    <main
      className={`bg-[#F8D6B3] ${
        !separate ? "border-t-[4px]" : ""
      } border-x-[4px]  border-black py-10 gap-4 flex flex-col justify-center items-center`}
    >
      <div className="text-3xl font-semibold">Blog</div>
      <div
        id="posts"
        className="flex flex-row flex-wrap lg:gap-20 gap-10 justify-center"
      >
        {posts.slice(0, loadMore ? posts.length : 6).map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>

      {posts.length > 6 ? (
        <div className="flex justify-center mt-5">
          <button
            id="setLoadMore"
            type="submit"
            onClick={() => setLoadMore(true)}
            className={`${
              loadMore ? "hidden" : "block"
            } ease-in-out duration-100 text-xl font-semibold shadow border-2 border-black rounded-md p-2 bg-[#87CEEB]`}
          >
            Load more...
          </button>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Blog;

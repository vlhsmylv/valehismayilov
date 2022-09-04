import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Posts = ({ posts }: any) => {
  return (
    <div id="posts" className="d-flex gap-4 flex-column mt-4">
      {posts.map((art: any, i: number) => (
        <article key={i}>
          <Link href={`/${art.slug}`}>
            <a className="text-dark fs-2 fw-bold hover-link text-decoration-none cursor-pointer">
              {art.title}
            </a>
          </Link>
          <div>
            <ReactMarkdown className="mt-2 d-inline-block">
              {art.content.substring(0, 200)}
            </ReactMarkdown>
            &nbsp;&nbsp; 
            <Link href={`/${art.slug}`}>
              <a className="text-dark fw-bold text-decoration-none hover-link">
                Read more <i className="fa-solid fa-chevron-right"></i>
              </a>
            </Link>
          </div>

          <div className="mt-2 float-end text-secondary">{art.date}</div>
        </article>
      ))}
    </div>
  );
};

export default Posts;

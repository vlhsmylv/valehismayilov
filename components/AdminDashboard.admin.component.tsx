import Link from "next/link";
import NewPost from "./admin/NewPost.admin.component";
import DeletePost from "./admin/DeletePost.admin.component";
import EditPost from "./admin/EditPost.admin.component";

const AdminDashboard = ({ posts }: any) => {
  return (
    <div
      id="dashboard"
      className="m-auto mt-5"
      style={{
        maxWidth: "600px",
      }}
    >
      <div>
        <span className="fs-3">All posts</span>

        <span className="float-end">
          <NewPost />
        </span>
      </div>
      <table
        className="mt-3 table table-striped table-bordered table-hover"
        id="posts"
      >
        <thead>
          <tr>
            <th>Post title</th>
            <th>Date</th>
            <th>Functions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any, i: number) => (
            <tr key={i}>
              <td>
                <Link href={`/${post.slug}`}>
                  <a target={"_blank"} className="text-dark">
                    {post.title}
                  </a>
                </Link>
              </td>
              <td>{post.date}</td>
              <td className="d-flex gap-2">
                <EditPost post={post} /> 
                <DeletePost post={post} />  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

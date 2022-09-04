import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { root } from "../../config/api.config";

const DeletePost = ({ post }: any) => {
  const router = useRouter();

  const [windowReady, setWindowReady] = useState<boolean>(false);

  const tryDelete = async (e: any) => {
    e.preventDefault();
    if (window.confirm(`Do you want to delete ${post.title}?`)) {
      const { data } = await axios.delete(
        `${root}/api/posts/delete/${post.slug}`
      );

      if (data.status) {
        router.reload();
      } else {
        window.alert(data.err);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      setWindowReady(true);
    }
  }, [windowReady]);

  return (
    <>
      {windowReady ? (
        <button
          title="Delete"
          onClick={tryDelete}
          className="btn btn-danger p-1 ps-2 pe-2"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeletePost;

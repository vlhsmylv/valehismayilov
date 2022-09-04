import { db } from "../../../../config/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";

const handler = async (req: any, res: any) => {
  if (req.method === "DELETE") {
    try {
      await deleteDoc(doc(db, "posts", req.query.postId));

      res.json({
        status: true,
      });
    } catch (e: any) {
      res.json({
        status: false,
        err: e.message,
      });
    }
  } else {
    res.status(403);
  }
};

export default handler;

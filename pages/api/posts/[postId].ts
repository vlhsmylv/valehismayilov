import { db } from "../../../config/firebase.config";
import { doc, getDoc } from "firebase/firestore";

const handler = async (req: any, res: any) => {
  if (req.method === "GET") {
    const postRef : any = doc(db, "posts", req.query.postId);
    const postDoc = await getDoc(postRef);
    res.send(postDoc.data());
  } else {
    res.status(403);
  }
};

export default handler;

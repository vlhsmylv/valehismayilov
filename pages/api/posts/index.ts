import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../config/firebase.config";

const handler = async (req: any, res: any) => {
    if(req.method === "GET") {
        const posts : {}[] = [];
        const postsRef = query(collection(db, "posts"), orderBy("date", "desc"));
        const postsDocs = await getDocs(postsRef);
        postsDocs.forEach((postDoc => {
            posts.push(postDoc.data());
        }))
        res.send(posts);
    } else {
        res.status(403);
    }
}

export default handler;
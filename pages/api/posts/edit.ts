import { doc, setDoc } from "firebase/firestore";
import slugify from "slugify";
import { db } from "../../../config/firebase.config";

const handler = async (req: any, res: any) => {
  if (req.method === "PUT") {
    const { title, content, date } = req.body;

    if (title !== "" && content !== "" && date !== "") {
      const slug = slugify(title).toLowerCase();

      const postObj = {
        title: title,
        content: content,
        date: date,
        slug: slug,
      };

      try {
        await setDoc(doc(db, "posts", slug), postObj);

        res.json({
          status: true
        });
      } catch (e: any) {
        res.json({
          status: false,
          err: e.message,
        });
      }
    } else {
      res.json({
        status: false,
        err: "Fill all fields",
      });
    }
  } else {
    res.status(403);
  }
};

export default handler;

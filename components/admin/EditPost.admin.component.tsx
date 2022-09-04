import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { root } from "../../config/api.config";
import { useRouter } from "next/router";

const EditPost = ({ post }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [expandedWriter, setExpandedWriter] = useState<boolean>(false);
  const [previewWriter, setPreviewWriter] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [content, setContent] = useState<string>(post.content);
  const [date, setDate] = useState<string>(post.date);

  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleEdit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${root}/api/posts/edit`, {
        title: title,
        content: content,
        date: date,
      });
      if (data.status) {
        router.reload();
      } else {
        setError(data.err);
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header>Edit {post.title}</Modal.Header>
        <form onSubmit={handleEdit}>
          <Modal.Body>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"
                placeholder="Enter post title"
                className="mt-1 form-control"
                required={true}
              />
            </div>
            <div className="mt-3">
              <Modal
                show={expandedWriter}
                onHide={() => setExpandedWriter(false)}
                size="lg"
              >
                <Modal.Body>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control mt-1"
                    placeholder="Enter post content (Markdown)"
                    style={{
                      height: "500px",
                    }}
                  ></textarea>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => setExpandedWriter(false)}
                    type="button"
                  >
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={previewWriter}
                onHide={() => setPreviewWriter(false)}
                size="lg"
              >
                <Modal.Header>Preview Writer</Modal.Header>
                <Modal.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => setPreviewWriter(false)}
                  >
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
              <span>
                <span>Content</span>
                <span className="float-end d-flex gap-2">
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-brands fa-markdown"></i> Markdown supported
                  </span>
                  |
                  <button
                    className="bg-transparent border-0"
                    onClick={() => setExpandedWriter(true)}
                    type="button"
                  >
                    <i className="fa-solid fa-expand"></i>
                  </button>
                  <button
                    className="bg-transparent border-0"
                    onClick={() => setPreviewWriter(true)}
                    type="button"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </span>
              </span>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control mt-1"
                placeholder="Enter post content (Markdown)"
                style={{
                  height: "200px",
                }}
                required={true}
              ></textarea>
            </div>
            <div className="mt-3">
              <label>Date</label>
              <input
                type="date"
                className="form-control mt-1"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required={true}
              />
            </div>
            <div className="fw-bold text-danger text-center mt-2">{error}</div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button type="submit" className="btn btn-dark">
              <i className="fa-solid fa-check"></i> Finish
            </button>
          </Modal.Footer>
        </form>
      </Modal>

      <button
        title="Edit"
        className="btn btn-warning p-1 ps-2 pe-2"
        onClick={() => setShowModal(true)}
      >
        <i className="fa-solid fa-edit text-light"></i>
      </button>
    </>
  );
};

export default EditPost;

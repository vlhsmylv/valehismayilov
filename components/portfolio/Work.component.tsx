import { Modal } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

const Work = ({ work }: any) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="secondary-font"
      >
        <Modal.Header className="fs-3 fw-bold">{work.title}</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img
              className="border rounded portfolio-expanded-img"
              src={`/works/${work.photo}`}
            />
          </div>
          <div className="mt-3 fs-5">{work.details}</div>
          <div className="text-center mt-3">
            <Link href={work.url}>
              <a target={"_blank"} className="btn btn-outline-secondary">
                <i className="fa-solid fa-share"></i> Visit
              </a>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShow(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <div
        style={{
          width: "250px",
          cursor: "pointer",
        }}
        className="bg-light work-hover-el border rounded p-0 secondary-font d-flex gap-2 flex-column justify-content-center align-items-center"
        onClick={() => {
          setShow(true);
        }}
      >
        <img
          src={`/works/${work.photo}`}
          style={{
            width: "100%",
          }}
          className="border rounded"
        />
      </div>
    </>
  );
};

export default Work;

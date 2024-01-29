import * as blogService from "../service/BlogService";
import { useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [blogDelete, setBlogDelete] = useState({});
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("")
  const getAll = async () => {
    const temp = await blogService.getAll();
    setBlogs(temp);
  };
  return (
    <>
      <h1>Blog List</h1>
      <div className="container-fluid">
        <div className="row">
          <table className="table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setBlogDelete(item);
                        setModalTitle("Delete Blog");
                        setModalContent(`Are you sure you want to delete "${item.title}" ?`);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* MODAL */}
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {modalTitle}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{modalContent}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger" onClick={blogService.removeBlog(blogDelete)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

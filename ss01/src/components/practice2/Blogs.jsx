import { getAll } from "../../service/BlogService";
import { removeBlog } from "../../service/BlogService";
import { findByName } from "../../service/BlogService";
import { useEffect, useState } from "react";
import "./blog.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [blogDelete, setBlogDelete] = useState({});
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const [searchName, setSearchName] = useState("");
  // const list = async () => {
  //   const temp = await getAll();
  //   setBlogs(temp);
  // };
  const list = async () => {
    const temp = await getAll();
    setBlogs(temp);
  };

  const findBlog = async () => {
    let temp = await findByName(searchName);
    setBlogs(temp);
  };
  // useEffect(() => {
  //   list();
  // }, [blogs.length]);

  useEffect(() => {
    findBlog();
  }, [searchName, blogs]);

  return (
    <>
      <h1>Blog List</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
            />
          </div>

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
                  <td>{index + 1}</td>
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
                        setModalContent(
                          `Are you sure you want to delete "${item.title}"?`
                        );
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
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeBlog(blogDelete)}
                    data-bs-dismiss="modal"
                  >
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

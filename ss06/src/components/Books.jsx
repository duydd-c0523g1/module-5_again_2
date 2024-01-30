import { useState, useEffect } from "react";
import { getAll } from "../service/BookService";
import { findByName } from "../service/BookService";
import { Link, NavLink } from "react-router-dom";
import { removeBook } from "../service/BookService";
import "./style.css";

export default function BookList() {
  const [bookList, setBookList] = useState([]);
  const [bookDelete, setBookDelete] = useState({});
  const getAllBooks = async () => {
    let temp = await getAll();
    console.log(temp);
    setBookList(temp);
  };

  const deleteBook = async () => {
    await removeBook(bookDelete);
    getAllBooks();
  };
  useEffect(() => {
    getAllBooks();
    console.log(bookList);
  }, []);
  return (
    <>
      <h1 className="mb-5">Book List</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookList.map((book, index) => (
                  <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.quantity}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic mixed styles example"
                      >
                        <button type="button" className="btn btn-warning">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => setBookDelete(book)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Delete book
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Delete {bookDelete.title}?</div>
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
                data-bs-dismiss="modal"
                onClick={deleteBook}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

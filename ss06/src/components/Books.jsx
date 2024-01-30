import { useState, useEffect } from "react";
import { getAll } from "../service/BookService";
import { findByName } from "../service/BookService";
import {Link, NavLink} from "react-router-dom";
import "./style.css";

export default function BookList() {
  const [bookList, setBookList] = useState([]);
  const getAllBooks = async () => {
    let temp = await getAll();
    console.log(temp);
    setBookList(temp);
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
                    <td>{index +1}</td>
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
                        <button type="button" className="btn btn-danger">
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
    </>
  );
}

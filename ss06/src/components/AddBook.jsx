
import { useNavigate } from "react-router-dom";
import { addBook } from "../service/BookService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function AddBook() {
  const navigate = useNavigate();

  const innitValues = { title: "", quantity: "" };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    quantity: Yup.number().required("Quantity is required"),
  });

  const addNewBook = async (book) => {
    let temp = await addBook(book);
    console.log(temp);
    navigate("/");
  };
  return (
    <>
      <Formik
        initialValues={innitValues}
        onSubmit={(item) => addNewBook(item)}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="container">
            <div className="formInput">
              <h1>Add New Book</h1>
              <div className="mb-3 mt-5">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Title
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  name="title"
                />
                <ErrorMessage name="title" component="span" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Quantity
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="formGroupExampleInput2"
                  name="quantity"
                />
                <ErrorMessage name="quantity" component="span" />
              </div>
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

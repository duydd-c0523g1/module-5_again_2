import { useNavigate, useParams } from "react-router-dom";
import { findById, updateBook } from "../service/BookService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export default function AddBook() {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param.id);
  const [book, setBook] = useState();
  
  useEffect(() => {
    const a = async () => {
      const temp = await findById(param.id);
      console.log(temp);
      setBook(temp);
    };
    a();
  }, [param.id]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    quantity: Yup.number().required("Quantity is required"),
  });

  const confirmUpdate = async (item) => {
    await updateBook(item, param.id);
    navigate("/");
  };

  if (!book) {
    return null;
  }
  return (
    <>
      <Formik
        initialValues={{
          id: book.id,
          title: book.title,
          quantity: book.quantity,
        }}
        onSubmit={(item) => confirmUpdate(item)}
        validationSchema={validationSchema}
      >
        
          <Form>
            <div className="container">
              <div className="formInput">
                <h1>Edit {book.title} </h1>
                <div className="mb-3 mt-5">
                  <Field name="id" type="hidden"></Field>
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Title
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    name="title"
                  />
                  <ErrorMessage
                    name="title"
                    component="span"
                    className="errorField"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Quantity
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    id="formGroupExampleInput2"
                    name="quantity"
                  />
                  <ErrorMessage
                    name="quantity"
                    component="span"
                    className="errorField"
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              </div>
            </div>
          </Form>
        
      </Formik>
    </> 
  );
}

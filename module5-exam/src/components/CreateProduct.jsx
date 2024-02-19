import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addProducts } from "../service/ProductService";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {

    const navigate = useNavigate();

    const createProduct = async (values) => {
        await addProducts(values);
        navigate("/")
    }

    const innitValues = {name: "", quantity: 1, importDate: "", type: ""};

    const validateObject = {
        name: Yup.string()
          .required("Product name must not be empty")
          .min(5, "Product name is too short")
          .max(100, "Product name is too long"),
    
        quantity: Yup.number()
          .required("Quantity must not be empty")
          .min(1, "Product quantity must be greater than 0"),
        importDate: Yup.date()
          .required("Product import date must not be empty")
          .max(new Date(), "Product import date must be greater than today"),
        type: Yup.string().required("Product type must not be empty"),
      };

  return (
    <>
      <div className="container">
        <h2>Update Product</h2>
        <Formik
          initialValues={innitValues}
          onSubmit={(values) => createProduct(values)}
          validationSchema={Yup.object(validateObject)}
        >
          <Form>
            <label>Name</label>
            <br />
            <Field name="name" className="form-control" type="text" />
            <ErrorMessage name="name" component="span"></ErrorMessage>
            <br />

            <label>Import Date</label>
            <br />
            <Field name="importDate" className="form-control" type="date" />
            <ErrorMessage name="importDate" component="span"></ErrorMessage>
            <br />

            <label>Quantity</label>
            <br />
            <Field name="quantity" className="form-control" type="number" />
            <ErrorMessage name="quantity" component="span"></ErrorMessage>
            <br />

            <label>Type</label>
            <br />
            <Field name="type" className="form-control" type="text" />
            <ErrorMessage name="type" component="span"></ErrorMessage>
            <br />

            <button type="submit" className="btn btn-primary">
              Confirm
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

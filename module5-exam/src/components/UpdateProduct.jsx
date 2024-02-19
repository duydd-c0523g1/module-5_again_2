import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateProducts, findById } from "../service/ProductService";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Update() {
  const param = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const temp = await findById(param.id);
    setProduct(temp);
  };

  const editProduct = async (values) => {
    await updateProducts(values, param.id);
    navigate("/");
  };

  const validateObject = {
    name: Yup.string()
      .required("Product name must not be empty")
      .min(5, "Product name is too short")
      .max(100, "Product name is too long"),

    quantity: Yup.number()
      .required("Quantity must not be empty")
      .min(1, "Product quantity must be greater than 0"),
  };

  if (!product) {
    return null;
  }

  return (
    <div className="container">
      <h2>Update Product</h2>
      <Formik
        initialValues={product}
        onSubmit={(values) => editProduct(values)}
        validationSchema={Yup.object(validateObject)}
      >
        <Form>
          <label>Name</label>
          <br />
          <Field name="name" className="form-control" />
          <ErrorMessage name="name" component="span"></ErrorMessage>
          <br />
    
          <label>Import Date</label>
          <br />
          <Field name="importDate" className="form-control" />
          <ErrorMessage name="importDate" component="span"></ErrorMessage>
          <br />
        
          <label>Quantity</label>
          <br />
          <Field name="quantity" className="form-control" />
          <ErrorMessage name="quantity" component="span"></ErrorMessage>
          <br />
          
          <label>Type</label>
          <br />
          <Field name="type" className="form-control" />
          <ErrorMessage name="type" component="span"></ErrorMessage>
          <br />
          
          <button type="submit" className="btn btn-primary">
            Confirm
          </button>
        </Form>
      </Formik>
    </div>
  );
}

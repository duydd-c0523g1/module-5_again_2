import React from "react";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";
function ContactForm() {
  const initValues = {
    fullName: "",
    email: "",
    phone: "",
  };
  
  const validateObject = {
    fullName: Yup.string().required("Tên không được để trống"),
    email: Yup.string().required("Email không được để trống").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Sai định dạng"),
    phone: Yup.string().required("Số điện thoại không được để trống").matches(/^\+?[0-9]{10,12}$/, "Sai định dạng")
  }

  return (
    <>
      <h1>Contact Form</h1>
      <Formik initialValues={initValues}
      validationSchema={Yup.object(validateObject)}>
        <Form>
            <div>
            <label htmlFor="fullName">Name</label>
            <Field type='text' id='fullName' name='fullName'/>
            <ErrorMessage name="fullName" component='span' />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <Field type='email' id='fullName' name='email'/>
            <ErrorMessage name="email" component='span' />
            </div>
            <div>
            <label htmlFor="phone">Phone</label>
            <Field type='tel' id='phone' name='phone'/>
            <ErrorMessage name="phone" component='span' />
            </div>
            <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
export default ContactForm;

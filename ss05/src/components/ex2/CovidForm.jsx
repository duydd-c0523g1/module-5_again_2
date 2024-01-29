import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CovidForm() {
  const initValues = {
    fullName: "",
    idNumber: "",
    dob: "",
    country: "",
    company: "",
    department: "",
  };
  const validate = Yup.object({
    fullName: Yup.string().required("Không được bỏ trống"),
    idNumber: Yup.string().required("Không được bỏ trống"),
    dob: Yup.string()
      .required("Không được bỏ trống")
      .matches(/^[1-2][0-9]{3}$/, "Không hợp lệ")
      .test("", "Năm sinh phải sau 1900", (dob) => {
        return + dob > 1900;
      }),
    department: Yup.string().required("Không được bỏ trống"),
    country: Yup.string().required("Không được bỏ trống"),
    city: Yup.string().required("Không được bỏ trống"),
    district: Yup.string().required("Không được bỏ trống"),
    ward: Yup.string().required("Không được bỏ trống"),
    address: Yup.string().required("Không được bỏ trống"),
    phone: Yup.string().required("Không được bỏ trống"),
    email: Yup.string()
      .required("Không được bỏ trống")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Sai định dạng"),
  });

  function handleSubmit() {
    alert("Submitted");
  }

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={validate}
    >
      <Form>
        <h1>Tờ khai y tế</h1>

        <div className="custom-input">
          <label htmlFor="name">Họ tên:</label>
          <Field type="text" id="name" name="fullName" />
          <ErrorMessage component="span" name="fullName" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="idNumber">Số hộ chiếu / CMND:</label>
          <Field type="text" id="idNumber" name="idNumber" />
          <ErrorMessage component="span" name="idNumber" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="year">Năm sinh:</label>
          <Field type="text" id="dob" name="dob" />
          <ErrorMessage component="span" name="dob" className="error" />
        </div>
        <div className="custom-input gender">
          <label>Giới tính:</label>

          <label htmlFor="nam" className="radio-label">
            <Field id="nam" type="radio" value="nam" name="gender" />
            Nam
          </label>

          <label htmlFor="nu" className="radio-label">
            <Field id="nu" type="radio" value="nu" name="gender" />
            Nữ
          </label>

          <label htmlFor="khac" className="radio-label">
            <Field id="khac" type="radio" value="khac" name="gender" />
            Khác
          </label>
        </div>
        <div className="custom-input">
          <label htmlFor="country">Quốc tịch:</label>
          <Field type="text" id="country" name="country" />
          <ErrorMessage component="span" name="country" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="company">Công ty làm việc:</label>
          <Field type="text" id="company" name="company" />
          <ErrorMessage component="span" name="company" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="department">Bộ phận làm việc:</label>
          <Field type="text" id="department" name="department" />
          <ErrorMessage component="span" name="department" className="error" />
        </div>
        <div className="custom-input gender">
          <label htmlFor="insurance" className="radio-label">
            <Field
              id="insurance"
              type="checkBox"
              value="insurance"
              name="insurance"
            />
            Có thẻ bảo hiểm y tế
          </label>
        </div>

        <h3>Địa chỉ liên lạc tại Việt Nam</h3>

        <div className="custom-input">
          <label htmlFor="city">Tỉnh thành:</label>
          <Field type="text" id="city" name="city" />
          <ErrorMessage component="span" name="city" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="district">Quận huyện:</label>
          <Field type="text" id="district" name="district" />
          <ErrorMessage component="span" name="district" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="ward">Phường xã:</label>
          <Field type="text" id="ward" name="ward" />
          <ErrorMessage component="span" name="ward" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="address">Địa chỉ:</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage component="span" name="address" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="phone">Số điện thoại:</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage component="span" name="phone" className="error" />
        </div>
        <div className="custom-input">
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage component="span" name="email" className="error" />
        </div>

        <h3>
          Trong vòng 14 ngày qua, Anh / Chị có đến quốc gia / vùng lãnh thổ nào
          (Có thể đi qua nhiều quốc gia)
        </h3>

        <div className="custom-input">
          <textarea
            name="textArea"
            id="textArea"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <h3>
          Trong vòng 14 ngày qua, Anh / Chị có thấy xuất hiện dấu hiện nào sau
          đây không
        </h3>
        <div className="custom-input gender">
          <label htmlFor="symtomp1" className="radio-label">
            <Field
              id="symtomp1"
              type="checkBox"
              value="symtomp1"
              name="symtomp1"
            />
            Sốt
          </label>
          <label htmlFor="symtomp2" className="radio-label">
            <Field
              id="symtomp2"
              type="checkBox"
              value="symtomp2"
              name="symtomp2"
            />
            Ho
          </label>
          <label htmlFor="symtomp3" className="radio-label">
            <Field
              id="symtomp3"
              type="checkBox"
              value="symtomp3"
              name="symtomp3"
            />
            Khó thở
          </label>
          <label htmlFor="symtomp4" className="radio-label">
            <Field
              id="symtomp4"
              type="checkBox"
              value="symtomp4"
              name="symtomp4"
            />
            Viêm phổi
          </label>
          <label htmlFor="symtomp5" className="radio-label">
            <Field
              id="symtomp5"
              type="checkBox"
              value="symtomp5"
              name="symtomp5"
            />
            Đau họng
          </label>
          <label htmlFor="symtomp6" className="radio-label">
            <Field
              id="symtomp6"
              type="checkBox"
              value="symtomp6"
              name="symtomp6"
            />
            Mệt mỏi
          </label>
        </div>

        <h3>
          Trong vòng 14 ngày qua, Anh / Chị có thấy xuất hiện dấu hiện nào sau
          đây không
        </h3>
        <div className="custom-input gender">
          <label htmlFor="contact" className="radio-label">
            <Field
              id="contact"
              type="checkBox"
              value="contact"
              name="contact"
            />
            Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
          </label>
          <label htmlFor="contact2" className="radio-label">
            <Field
              id="contact2"
              type="checkBox"
              value="contact2"
              name="contact2"
            />
            Người từ nước có bệnh COVID-19
          </label>
          <label htmlFor="contact3" className="radio-label">
            <Field
              id="contact3"
              type="checkBox"
              value="contact3"
              name="contact3"
            />
            Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default CovidForm;

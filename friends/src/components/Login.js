import React from "react";
import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = (props) => {
  const { values, errors, touched, handleChange, isSubmitting } = props;

  return (
    <div className="container">
      <Form>
        <div className="field">
          <div className="control">
            <label className="label">User Name</label>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field
              className="input"
              type="text"
              name="username"
              placeholder="User Name"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">Password</label>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field
              className="input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <button disabled={isSubmitting}>Submit</button>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ email, password, tos, dummy, test }) {
    return {
      email: email || "",
      password: password || "",
      tos: tos || false,
      dummy: dummy || "atom",
      test: test || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Must be longer")
      .required("A username is required!"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required"),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  },
})(Login);

export default FormikLogin;

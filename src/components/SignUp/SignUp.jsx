import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startSignUpEmailPassword } from "../../redux/actions/authReducer";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("The name is required")
    .min(3, "Must be 3 characters or more"),
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less"),
  confirmPassword: Yup.string()
    .required("The password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const [reset] = useForm();

  return (
    
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(
          startSignUpEmailPassword(values.email, values.password, values.name)
        );
        reset();
      }}
    >
      {({ isValid }) => (
        <div className="m-auto" >
        <div
          className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className="card p-4 bg-dark">
            <div className='d-flex justify-content-center'><img
              alt=""
              src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png"
              width="180"
            />
            </div>
            <div className="card-body w-100"></div>
        <Form>
          
          <Field className="rounded-end form-control my-3" type="text" name="name" placeholder="Nombre" />
          <ErrorMessage name="name" component="span" className="error" />

          <Field className="rounded-end form-control my-3" type="text" name="fullname" placeholder="Apellido" />
          <ErrorMessage name="fullname" component="span" className="error" />

          <Field className="rounded-end form-control my-3" type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="span" className="error" />

          <Field className="rounded-end form-control my-3" type="text" name="fullname" placeholder="Ciudad" />
          <ErrorMessage name="fullname" component="span" className="error" />

          <Field className="rounded-end form-control my-3" type="password" name="password" placeholder="Contraseña" />
          <ErrorMessage name="password" component="span" className="error" />

          <Field className="rounded-end form-control my-3"
            type="password"
            name="confirmPassword"
            placeholder="Repetir contraseña"
          />
          <ErrorMessage
            name="confirmPassword"
            component="span"
            className="error"
          />
          <div className="mt-5 card-footer text-center">
          <button className="btn bg-success text-white me-2" type="submit" disabled={!isValid}>
            Registrarse
          </button>
          <hr/>
          <Link to="/login" className="link text-success">
            ¿Ya tienes una cuenta?
          </Link>
          </div>
        </Form>
        </div>
            </div>
          </div>
      )}
    </Formik>
  );
};

export default SignUp;

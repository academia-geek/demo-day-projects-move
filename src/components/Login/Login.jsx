import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from "../../redux/actions/authReducer";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less"),
});

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          dispatch(startLoginEmailPassword(values.email, values.password));
        }}
      >
        {({ isValid }) => (
          <div className="m-auto" >
            <div
              className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
              <div className="card p-4">
                <div className='d-flex justify-content-center'><img
                  alt=""
                  src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png"
                  width="180"
                />
                </div>
                <div className="card-body w-100"></div>
                <Form className="text-center w-75 m-auto">
                  <div className="input-group form-group mt-3 ">
                    <div className="bg-success rounded-start ">
                      <span className="m-3"><i className="fas fa-user mt-2 text-white"></i></span>
                    </div>
                    <Field className="rounded-end form-control" type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="span" className="error" />
                  </div>
                  <div className="input-group form-group mt-3">
                    <div className="bg-success rounded-start">
                      <span className="m-3"><i className="fas fa-key mt-2 text-white"></i></span>
                    </div>
                    <Field className="rounded-end form-control" type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="span" className="error" />
                  </div>
                  <div className="form-group mt-3">

                    <button className="btn bg-success text-white" type="submit" disabled={!isValid}>
                      Iniciar Sesión
                    </button>
                  </div>
                  <div className="mt-5 card-footer text-center">

                    <button className="btn btn-block btn-danger w-100 my-2" type="submit" onClick={() => dispatch(startGoogleLogin())}>
                      <i className="fab fa-google me-2"></i>
                      Iniciar Sesión con Google
                    </button>
                    <button className="btn btn-block btn-primary w-100 my-2"
                      type="submit"
                      onClick={() => dispatch(startFacebookLogin())}
                    ><i className="fab fa-facebook me-2"></i>
                      Iniciar Sesión con Facebook
                    </button>
                    <Link className="text-success" to="/signup">
                      No tiene una cuenta?
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>      
    </>
  );
};

export default Login;

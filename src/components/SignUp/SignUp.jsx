import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { startSignUpEmailPassword } from "../../redux/actions/authReducer";


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const [reset] = useForm();

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""        
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(
          startSignUpEmailPassword(values.email, values.password)
        );
        reset();
      }}
    >
      {({ isValid }) => (
        <div className="m-auto p-5" >
        <div
          className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className="card p-5">
            <div className='d-flex justify-content-center px-5'><img
              alt=""
              src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png"
              width="180"
            />
            </div>
            <div className="card-body w-100"></div>
        <Form style={{ textAlign:'center' }}>  
          <Field type="email" name="email" placeholder="Email" style={{ margin:'10px' }}/>
          <ErrorMessage name="email" component="span" className="error" />
          <br/>
          <Field type="password" name="password" placeholder="Password" style={{ margin:'10px' }}/>
          <ErrorMessage name="password" component="span" className="error" />
          <br/>
          <button className="btn bg-success text-white m-3" type="submit" disabled={!isValid}>
            Registrarse
          </button>
          <hr/>
          <Link to="/login" className="link">
            Ya tiene una cuenta?
          </Link>
        </Form>
        </div>
          </div>
           </div>
      )}
    </Formik>
  );
};

export default SignUp;
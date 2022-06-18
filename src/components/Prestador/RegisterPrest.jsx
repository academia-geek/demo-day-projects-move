import React, { useRef, useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import Swal from "sweetalert2";

const RegisterPrest = () => {
  const [formValues, setFormValues] = useState();
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLenderSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const user = JSON.parse(localStorage.getItem("user")) || "";
    console.log(user);
    fetch("http://35.211.155.160:5000/auth/users/lender", {
      body: JSON.stringify({
        cc_user_fk: formValues.cc_user_fk,
        conductor: formValues.conductor,
      }),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          Swal.fire("Bien Hecho!", "Registro exitoso", "success");
        } else {
          Swal.fire("Oops...", "Ha ocurrido un error", "error");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error" + error);
      });
    form.current.reset();
  };

  return (
    <div style={{ marginLeft: "120px" }}>
      <h1 className="text-center p-3">Solicitar ser Prestador</h1>
      <div className=" d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="card p-5 m-5">
          <div className="card-body w-100"></div>
          <form onSubmit={handleLenderSubmit} ref={form}>
            <input
              className="rounded-end form-control my-3"
              type="number"
              name="cc_user_fk"
              placeholder="Tu CC de Identidad"
              onChange={handleChange}
            />
            <div className="text-center">
              <small>¿Quieres ser conductor? </small>
              <ReactHTMLDatalist
                name="conductor"
                onChange={handleChange}
                options={[
                  { text: "Si", value: "si" },
                  { text: "No", value: "no" },
                ]}
              />
            </div>
            <div className="mt-5 text-center">
              <button className="btn bg-success text-white me-2" type="submit">
                Registro para Prestador
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPrest;

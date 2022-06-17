import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const Profile = () => {
  const [formValues, setFormValues] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const form = useRef(null);

  const handleLenderSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const user = JSON.parse(localStorage.getItem("user")) || "";
    fetch("http://35.211.155.160:5000/auth/users/", {
      body: JSON.stringify({
        cc_user: formValues.cc_user,
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        email: formValues.email,
        city: formValues.city,
        address: formValues.address,
        age: formValues.age,
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
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
    form.current.reset();
  };

  return (
    <div style={{ marginLeft: "100px" }}>
      <div className=" d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="card p-5 m-5">
          <form onSubmit={handleLenderSubmit} ref={form}>
            <h1 className="text-center p-3">Perfil de Usuario</h1>
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="cc_user"
              placeholder="Documento de Identidad"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="first_name"
              placeholder="Nombres"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="last_name"
              placeholder="Apellidos"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="city"
              placeholder="Ciudad"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="address"
              placeholder="Dirección"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="age"
              name="age"
              placeholder="Edad"
              onChange={handleChange}
            />
            <div className="mt-5 text-center">
              <button className="btn bg-success text-white me-2" type="submit">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

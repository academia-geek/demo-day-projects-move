import React, { useRef, useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import Swal from "sweetalert2";

const HomeP = () => {
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
    fetch("http://35.211.155.160:5000/vehicles", {
      body: JSON.stringify({
        cc_user_fk: formValues.cc_user_fk,
        placa: formValues.placa,
        url_image: formValues.url_image,
        modelo: formValues.modelo,
        color: formValues.color,
        activo: formValues.activo,
        gama: formValues.gama,
        poliza: formValues.poliza,
        tipo_combustible: formValues.tipo_combustible,
        zone: formValues.zone,
        price: formValues.price
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
    // form.current.reset();
  };
  return (
    <div style={{ marginLeft: "120px" }}>
      <h1 className="text-center p-3">Bienvenido Prestador</h1>

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
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="placa"
              placeholder="Placa del Vehículo"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="url_image"
              placeholder="Url Imagen"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="modelo"
              placeholder="Modelo"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="color"
              placeholder="Color"
              onChange={handleChange}
            />
            <small>Estado del vehículo</small>
            <ReactHTMLDatalist
              name="activo"
              onChange={handleChange}
              options={[
                { text: "Activo", value: true },
                { text: "Inactivo", value: false },
              ]}
            />
            <hr />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="gama"
              placeholder="Gama"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="poliza"
              placeholder="Póliza"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="tipo_combustible"
              placeholder="Tipo combustible"
              onChange={handleChange}
            />
            <small>Zona</small>
            <ReactHTMLDatalist
              name="zone"
              onChange={handleChange}
              options={[
                { text: "Pereira", value: "Pereira" },
                { text: "Medellin", value: "Medellin" },
                { text: "Cali", value: "Cali" },
                { text: "Manizales", value: "Manizales" },
              ]}
            />
            <hr />
            <input
              className="rounded-end form-control my-3"
              type="number"
              name="price"
              placeholder="Precio"
              onChange={handleChange}
            />

            <div className="mt-5 text-center">
              <button className="btn bg-success text-white me-2" type="submit">
                Agregar Vehículo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeP;

import axios from "axios";
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
    const user = JSON.parse(localStorage.getItem("user")) || "";
    axios({
      method: "POST",
      url: "https://api.demodaymove.tech/vehicles",
      data: {
        cc_owner: formValues.cc_owner,
        placa: formValues.placa,
        url_image: [
          {
            url: formValues.url_image,
          },
        ],
        modelo: formValues.modelo,
        marca: formValues.marca,
        color: formValues.color,
        linea: formValues.linea,
        fecha_disponibilidad: "",
        url_soat: "",
        url_tecnicomecanica: "",
        tipo_vehiculo: formValues.tipo_vehiculo,
        url_ficha_tecnica: "",
        estado: "",
        activo: false,
        tipo: "",
        gama: formValues.gama,
        comision_renta: 0,
        poliza: false,
        limpieza: "",
        tipo_combustible: "",
        valor_combustible: "",
        zone: "",
        price: formValues.price,
      },
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire("Bien Hecho!", "Registro exitoso", "success");
        } else {
          Swal.fire("Oops...", "Ha ocurrido un error", "error");
        }
      })
      .catch((error) => {
        Swal.fire("Oops...", "Ha ocurrido un error", "error" + error);
      });
    form.current.reset();
  };
  return (
    <div style={{ marginLeft: "120px" }} className="text-center">
      <h1 className="text-center p-3">Bienvenido Prestador</h1>
      <p>Registra tu vehículo</p>
      <div className=" d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="card p-5 m-5">
          <div className="card-body w-100"></div>
          <form onSubmit={handleLenderSubmit} ref={form}>
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="cc_owner"
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
              type="number"
              name="modelo"
              placeholder="Modelo"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="marca"
              placeholder="Marca"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="color"
              placeholder="Color"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="linea"
              placeholder="Linea"
              onChange={handleChange}
            />
            <small>Gama del vehículo </small> <br />
            <ReactHTMLDatalist
              id="gama"
              name="gama"
              onChange={handleChange}
              options={[
                { text: "Alta", value: "alta" },
                { text: "Media", value: "media" },
                { text: "Baja", value: "baja" },
              ]}
            />
            <hr />
            <small>Tipo del vehículo </small> <br />
            <ReactHTMLDatalist
              id="tipo_vehiculo"
              name="tipo_vehiculo"
              onChange={handleChange}
              options={[
                { text: "Combustión", value: "combustion" },
                { text: "Electricos", value: "electricos" },
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

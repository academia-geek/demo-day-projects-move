import axios from "axios";
import React, { useRef, useState } from "react";
// import ReactHTMLDatalist from "react-html-datalist";
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
    axios({
      method: "POST",
      url: "http://35.211.155.160:5000/vehicles",
      data: {
        cc_owner: "1017240334",
        placa: "INN349",
        url_image: [
          {
            url: "https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190122-MPM-ERELIS-AUTO-DEPORTIVO-MAS-BARATO-01.jpg",
          },
        ],
        modelo: 2022,
        marca: "Eleris",
        color: "Color",
        linea: "Deportivo",
        fecha_disponibilidad: "",
        url_soat: "",
        url_tecnicomecanica: "",
        tipo_vehiculo: "",
        url_ficha_tecnica: "",
        estado: "",
        activo: false,
        tipo: "",
        gama: "",
        comision_renta: 0,
        poliza: false,
        limpieza: "",
        tipo_combustible: "",
        valor_combustible: "",
        zone: "",
        price: 100000,
      },
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
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
            {/* <small>Estado del vehículo</small>
            <ReactHTMLDatalist
              name="activo"
              onChange={handleChange}
              options={[
                { text: "Activo", value: true },
                { text: "Inactivo", value: false },
              ]}
            />
            <hr /> */}
            <input
              className="rounded-end form-control my-3"
              type="text"
              name="gama"
              placeholder="Gama"
              onChange={handleChange}
            />
            {/* <input
              className="rounded-end form-control my-3"
              type="text"
              name="poliza"
              placeholder="Póliza"
              onChange={handleChange}
            /> */}
            {/* <input
              className="rounded-end form-control my-3"
              type="text"
              name="tipo_combustible"
              placeholder="Tipo combustible"
              onChange={handleChange}
            /> */}
            {/* <small>Zona</small>
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
            <hr /> */}
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

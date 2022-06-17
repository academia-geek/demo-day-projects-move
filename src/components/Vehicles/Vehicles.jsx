import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { urlv } from "../../helpers/url";

const Vehicles = () => {
  const [carArray, setCarArray] = useState([]);
  const getData = async (url) => {
    axios
      .get(url)
      .then((resp) => {
        setCarArray(resp.data);
      })
      .catch((error) => console.log(error));
  };

  const showDetail = (detailCar) => {
    localStorage.setItem("detailCar", JSON.stringify(detailCar));
    console.log(detailCar);
  };

  useEffect(() => {
    getData(urlv);
  }, []);

  const handleDelete = (car) => {
    console.log(car);
    const user = JSON.parse(localStorage.getItem("user")) || "";
    fetch("http://35.211.155.160:5000/vehicles/" + car._id, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          Swal.fire("Bien Hecho!", "Eliminado exitoso", "success");
        } else {
          Swal.fire("Oops...", "Ha ocurrido un error", "error");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };

  return (
    <>
      <div className="bg-transparent" style={{ marginLeft: "300px" }}>
        <div className="row m-3">
          {carArray?.map((car, index) => (
            <Card
              className="col-sm-auto m-3"
              key={index}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={car.url_image[0].url} />
              <Card.Body className="justify-content-around">
                <div>
                  <Card.Title>{car.marca}</Card.Title>
                  <Card.Title>{car.linea}</Card.Title>
                  <Card.Text>{car.tipo_vehiculo}</Card.Text>
                  <Card.Text>{car.gama}</Card.Text>
                  <Card.Text>${car.price}</Card.Text>
                  <Card.Text>{car.placa}</Card.Text>
                </div>
                <div className="">
                  <Button
                    className="mt-2 m-2"
                    variant="success"
                    href={`/detail/${car.name}`}
                    onClick={() => showDetail(car)}
                  >
                    📖
                  </Button>
                  <Button
                    className="mt-2 m-2 btn btn-danger"
                    onClick={() => handleDelete(car)}
                    id={car.placa}
                  >
                    🗑
                  </Button>
                  <Button type="button" className="mt-2 m-2 btn btn-primary">
                    💾
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vehicles;

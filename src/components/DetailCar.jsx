import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const DetailCar = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const detailCar = [JSON.parse(localStorage.getItem("detailCar"))];
    setDetail(detailCar);
    console.log(detailCar);
  }, []);

  return (
    <>
      <div className="text-center" style={{ marginLeft: "300px" }}>
        {detail?.map((car, index) => (
          <div key={index}>
            <h1 className="mx-3">Detalle del Vehículo</h1>
            <Card className="m-3" style={{ width: "25rem" }}>
              <Card.Img variant="top" src={car.url_image[0].url} />
              <Card.Body>
                <div>
                <div className="d-flex justify-content-around">
                  <Card.Title>{car.marca}</Card.Title>
                  <Card.Title>{car.linea}</Card.Title>
                  </div>
                  <div className="d-flex justify-content-around">
                  <Card.Text>Año: {car.modelo}</Card.Text>
                  <Card.Text>Color: {car.color}</Card.Text>                  
                  <Card.Text>Gama: {car.gama}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-around">
                  <Card.Text>Poliza: {car.poliza}</Card.Text>
                  <Card.Text>Tipo: {car.tipo_vehiculo}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-around">
                  <Card.Text>Placa: {car.placa}</Card.Text>
                  <Card.Text>Dueño: {car.cc_owner}</Card.Text>
                  </div>
                  <Card.Text>Zonas disponibles: {car.zone}</Card.Text>
                  <Card.Title>Precio: ${car.price}</Card.Title>
                </div>
              </Card.Body>
              <Button variant="success">Rentar</Button>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailCar;

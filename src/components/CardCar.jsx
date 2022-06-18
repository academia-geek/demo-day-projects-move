import React from "react";
import { Button, Card } from "react-bootstrap";

const CardCar = (image, marca, modelo, precio) => {
  return (
    <Card className="col-sm-auto m-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex justify-content-around">
        <div>
          <Card.Title>{marca}</Card.Title>
          <Card.Title>{marca}</Card.Title>
          <Card.Title>{modelo}</Card.Title>
          <Card.Text>{precio}</Card.Text>
        </div>
        <div>
          <Button className="mt-2" variant="success">
            Ver Detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardCar;

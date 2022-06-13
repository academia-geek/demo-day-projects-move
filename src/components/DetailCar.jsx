import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';

const DetailCar = () => {
    const [detail, setDetail] = useState([]);

  useEffect(() => {
    const detailCar = [JSON.parse(localStorage.getItem('detailCar'))];
    setDetail(detailCar);
  }, [])
  return (
    <>
        <div style={{ marginLeft: '250px' }}>
        {
          detail?.map((car, index) => (
            <div key={index}>
              <h1 className="text-center">Detalle del Vehículo</h1>
                <Card className="text-center m-3" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={car.url_image[0].url} />
        <Card.Body className="d-flex justify-content-around">
          <div>
          <Card.Title>{car.marca}</Card.Title>
          <Card.Title>{car.linea}</Card.Title>
          <Card.Text>{car.color}</Card.Text>
          <Card.Text>{car.modelo}</Card.Text>
          <Card.Text>{car.gama}</Card.Text>
          <Card.Text>{car.poliza}</Card.Text>
          <Card.Text>{car.tipo_vehiculo}</Card.Text>
          <Card.Text>{car.tipo_combustible}</Card.Text>
          <Card.Text>{car.price}</Card.Text>
          </div>
          </Card.Body>
          <Button variant='success'>Rentar</Button>
          </Card> 
            </div>
            ))
        }
        </div>
    </>
  )
}

export default DetailCar
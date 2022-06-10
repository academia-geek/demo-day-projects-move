import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

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
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_960_720.jpg" />
        <Card.Body className="d-flex justify-content-around">
          <div>
          <Card.Title>Ford KA</Card.Title>
          <Card.Text>Disponible: Si</Card.Text>
          <Card.Text>Conductor: Si lo requiere</Card.Text>
          <Card.Text>Año: 2000</Card.Text>
          <Card.Text>Modelo: xxxx </Card.Text>
          <Card.Text>Automatico </Card.Text>
          <Card.Text>Aire Acondicionado</Card.Text>
          </div>
          </Card.Body>
          </Card> 
            </div>
            ))
        }
        </div>
    </>
  )
}

export default DetailCar
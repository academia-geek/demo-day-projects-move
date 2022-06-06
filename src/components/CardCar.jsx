import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardCar = () => {
  return (
      <Card className="col-sm-auto m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_960_720.jpg" />
        <Card.Body className="d-flex justify-content-around">
          <div>
          <Card.Title>Ford KA</Card.Title>
          <Card.Text>$389.56</Card.Text>
          </div>
          <div >
          <Button className="mt-2" variant="success">Ver Detalle</Button>
          </div>
        </Card.Body>
      </Card>     
  )
}

export default CardCar
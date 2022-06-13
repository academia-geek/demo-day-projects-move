import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { urlv } from '../../helpers/url';
import NavbarPriv from '../NavbarPriv';

const Vehicles = () => {
  const [carArray, setCarArray] = useState([]);
  const getData = async (url) => {
    axios.get(url)
      .then(resp => {
        setCarArray(resp.data);
    }).catch(error=> console.log(error))
  }    

  const showDetail = (detailCar) => {
    localStorage.setItem('detailCar', JSON.stringify(detailCar))
    console.log(detailCar)
  }

  useEffect(() => {
    getData(urlv);
  }, [])
  return (
    <>
    <NavbarPriv />
    <div className="bg-transparent" style={{marginLeft:'300px'}}>
    <div className="row m-3" >
    {
            carArray?.map((car, index) => (
              <Card className="col-sm-auto m-3" key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={car.url_image[0].url} />
              <Card.Body className="d-flex justify-content-around">
                <div>
                <Card.Title>{car.marca}</Card.Title>
                <Card.Title>{car.linea}</Card.Title>
                <Card.Text>{car.tipo_vehiculo}</Card.Text>
                <Card.Text>{car.gama}</Card.Text>
                <Card.Text>${car.price}</Card.Text>
                </div>
                <div >
                <Button className="mt-2" variant="success" href={`/detail/${car.name}`} onClick={() => showDetail(car)}>Ver Detalle</Button>
                </div>
              </Card.Body>
            </Card>  
    ))
  }
</div>
</div>
    </>
  );
}

export default Vehicles
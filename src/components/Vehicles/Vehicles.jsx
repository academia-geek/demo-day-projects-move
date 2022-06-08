import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { url } from '../../helpers/url';


const Vehicles = () => {
  const [carArray, setCarArray] = useState([]);
  const getData = async (url) => {
    axios.get(url)
      .then(resp => {
        for (let i = 0; i < resp.data.results.length; i++) {
          setCarArray([])
          axios.get(resp.data.results[i].url)
            .then(result => {
              setCarArray(carArray => [...carArray, result.data])
            })
        }
      })
  }

  const showDetail = (detailCar) => {
    localStorage.setItem('detailCar', JSON.stringify(detailCar))
    console.log(detailCar)
  }

  useEffect(() => {
    getData(url);
  }, [])
  return (
    <>
    <div className="bg-transparent" style={{marginLeft:'300px'}}>
    <div className="row m-3" >
    {
            carArray?.map((car, index) => (
              <Card className="col-sm-auto m-3" key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_960_720.jpg" />
              <Card.Body className="d-flex justify-content-around">
                <div>
                <Card.Title>Nombre</Card.Title>
                <Card.Text>$389.56</Card.Text>
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
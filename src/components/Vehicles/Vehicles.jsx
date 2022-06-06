import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../../helpers/url';
import CardCar from "../CardCar";

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
    <CardCar/>
    ))
  }
</div>
</div>
    </>
  );
}

export default Vehicles
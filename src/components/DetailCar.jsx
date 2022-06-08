import React, { useEffect, useState } from 'react'

const DetailCar = () => {
    const [detail, setDetail] = useState([]);

  useEffect(() => {
    const detailCar = [JSON.parse(localStorage.getItem('detailCar'))];
    setDetail(detailCar);
  }, [])
  return (
    <>
        <div>
        {
          detail?.map((car, index) => (
            <div key={index}>
                <div>Detalle</div>
            </div>
            ))
        }
        </div>
    </>
  )
}

export default DetailCar
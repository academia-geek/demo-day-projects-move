import React from 'react'

const Booking = () => {
  return (
    <div><h2>Reserva </h2>    
    <p className='p-1 text-center'>Busca aquí el vehículo que necesitas, introduce el rango requerido: fecha de entrega y hora, así como fecha de devolución y hora.</p>
    <div className="input-group form-group mt-3">
      <div className="p-2 bg-success text-white rounded-start w-25">
        <span>Fecha de Entrega</span>
      </div>
      <input type="date" className="form-control" placeholder="Email"
        name="email" />
    </div>
    <div className="input-group form-group mt-3">
      <div className="p-2 bg-success text-white rounded-start w-25">
        <span>Hora de Entrega</span>
      </div>
      <input type="time" className="form-control" placeholder="Email"
        name="email" />
    </div>
    <div className="input-group form-group mt-3">
      <div className="p-2 bg-success text-white rounded-start w-25">
        <span>Fecha de Devolución</span>
      </div>
      <input type="date" className="form-control" placeholder="Email"
        name="email" />
    </div>
    <div className="input-group form-group mt-3">
      <div className="p-2 bg-success text-white rounded-start w-25">
        <span>Hora de Devolución</span>
      </div>
      <input type="time" className="form-control" placeholder="Email"
        name="email" />
    </div>
    <div className="form-group mt-4">
      <input type="submit" value="Buscar"
        className="btn bg-success text-white float-end "
        name="login-btn" />
    </div></div>
  )
}

export default Booking
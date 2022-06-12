import React from 'react'
import { Dropdown, NavDropdown } from 'react-bootstrap'

const Booking = () => {
  return (
    <div><h2>Reserva </h2>
    <div className="input-group form-group mt-3">
      <div className="p-2 bg-success text-white rounded-start w-25">
        <span>Sede de Entrega</span>
      </div>
      <NavDropdown
        className="border w-75 m-auto"
        variant="outline-secondary"
        title="Seleccione"
        id="input-group-dropdown-1"          >
        <Dropdown.Item className="text-center" href="#">Medellín</Dropdown.Item>
        <Dropdown.Item className="text-center" href="#">Manizales</Dropdown.Item>
        <Dropdown.Item className="text-center" href="#">Pereira</Dropdown.Item>
      </NavDropdown>
    </div>
    <div className="input-group form-group mt-3">
      <div className="p-2 bg-success text-white rounded-start w-25">
        <span>Sede de Devolución</span>
      </div>
      <NavDropdown
        className="border w-75 m-auto"
        variant="outline-secondary"
        title="Seleccione"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item className="text-center" href="#">Medellín</Dropdown.Item>
        <Dropdown.Item className="text-center" href="#">Manizales</Dropdown.Item>
        <Dropdown.Item className="text-center" href="#">Pereira</Dropdown.Item>
      </NavDropdown>
    </div>
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
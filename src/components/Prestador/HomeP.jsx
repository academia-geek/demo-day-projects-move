import React from 'react'
import { Button, Nav } from "react-bootstrap";

const HomeP = () => {
  return (
    <div style={{marginLeft:'300px', height:'100vh', marginRight:'50px'}}>
      <h3>Bienvenido Prestador</h3>
      <Nav className="d-grid gap-2 d-flex ">
            <Button href="/login"  variant="success">
              Agregar Vehículo
            </Button>
      </Nav>
      </div>
  )
}

export default HomeP
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NabvarP = () => {
  return (
    <>  
  <Navbar expand="lg" bg="light">
    <Container fluid >
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png"
          width="180"          
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className='justify-content-end'>   
  <Nav.Link href="#action1">Bienvenidos</Nav.Link>
        <Nav.Link href="#action2">¿Quienes Somos?</Nav.Link>
        <NavDropdown title="Preguntas Frecuentes" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />          
        </NavDropdown> 
    <Nav className='d-grid gap-2 d-flex '>
    <Button href='/login' variant="success">Iniciar Sesión</Button>
    <Button href='/register' variant="outline-success">Registrarse</Button>
    </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  )
}

export default NabvarP
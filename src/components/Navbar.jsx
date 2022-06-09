import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand to="/">
          <img
            alt=""
            src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png"
            width="180"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="text-dark" href="#quienes-somos">¿Quienes Somos?</Nav.Link>
          <Nav.Link className="text-dark" href="#preguntas-frecuentes">Preguntas Frecuentes</Nav.Link>
          <Nav.Link className="text-dark" href="#vehiculos">Vehículos</Nav.Link>
          <Nav className="d-grid gap-2 d-flex ">
            <Button href="/login"  variant="success">
              Iniciar Sesión
            </Button>
            <Button href="/signup" variant="outline-success">
             Registrarse
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

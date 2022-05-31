import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Nav.Link href="#action2">¿Quienes Somos?</Nav.Link>
          <Nav.Link href="#action2">Preguntas Frecuentes</Nav.Link>
          <Nav.Link href="#action2">Vehículos Electricos</Nav.Link>
          <Nav className="d-grid gap-2 d-flex ">
            <Button variant="success">
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button variant="outline-success">
              <Link to="/signup">Registrarse</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

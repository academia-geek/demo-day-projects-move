import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { startLogout } from '../redux/actions/authReducer';
import { Link } from 'react-router-dom';
import Search from './Search';

const NavbarPriv = () => {
    const dispatch = useDispatch();
  return (
    <Navbar expand="lg" bg="light" style={{marginLeft:'200px'}}>
      <Container fluid>        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="text-dark" href="/vehicles">Todos los Vehículos</Nav.Link>
          <Nav.Link className="text-dark" href="/galta">Gama Alta</Nav.Link>
          <Nav.Link className="text-dark" href="/gmedia">Gama Media</Nav.Link>
          <Nav.Link className="text-dark" href="/economico">Económicos</Nav.Link>
          <Nav.Link className="text-dark" href="/electrico">Eléctricos</Nav.Link>
          <Search/>
          <Nav className="d-grid gap-2 d-flex ">
            <Button href="/login"  variant="success" onClick={() => dispatch(startLogout())}>
            <i className="fas fa-user-lock "></i> <span className="ms-1 d-none d-sm-inline">Cerrar Sesión</span>
            </Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
 

export default NavbarPriv
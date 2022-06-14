import React from 'react'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Search from './Search';

const NavbarPriv = () => {
  return (
    <Navbar expand="lg" bg="light" style={{marginLeft:'200px'}}>
      <Container fluid>        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="text-dark" href="/vehicles">Todos los Vehículos</Nav.Link>
          <Nav.Link className="text-dark" href="/galta">Gama Alta</Nav.Link>
          <Nav.Link className="text-dark" href="/gmedia">Gama Media</Nav.Link>
          <Nav.Link className="text-dark" href="/economicos">Económicos</Nav.Link>
          <Nav.Link className="text-dark" href="/electricos">Eléctricos</Nav.Link>
          <Search/>
          <Nav className="d-grid gap-2 d-flex ">
            <Button href="/homepriv"  variant="success" >Reserva</Button>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
 

export default NavbarPriv
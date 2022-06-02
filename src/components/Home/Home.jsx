import React from "react";
import { Button, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import NavBar from "../Navbar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container fluit className="d-flex p-5">
        <div className="pt-5">
          <h1>Movilidad Sostenible</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          <Button variant="success">Contáctanos</Button>
        </div>
        <div>
          <img className="w-100" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654135370/fvmd6rp4twkgp4wjyy9t.jpg' alt='foto-vehiculo' />
        </div>
      </Container>

      <Container className="p-5" >
        <h2>¿Quiénes Somos?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quasi voluptate est dolores, sunt iste magnam ipsa velit omnis exercitationem voluptates rerum beatae amet itaque aspernatur consequuntur deleniti sit unde.</p>
      </Container>

      <Container className="p-5" >
        <h2>Preguntas Frecuentes</h2>
        <DropdownButton variant="light" id="dropdown-item-button" title="Pregunta Frecuente">
        <Dropdown.ItemText> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem inventore voluptates necessitatibus, asperiores quisquam incidunt corrupti possimus molestiae accusamus. Nostrum quibusdam accusantium velit animi perferendis fugit, eaque quos voluptatibus aliquid! </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="Pregunta Frecuente">
        <Dropdown.ItemText> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem inventore voluptates necessitatibus, asperiores quisquam incidunt corrupti possimus molestiae accusamus. Nostrum quibusdam accusantium velit animi perferendis fugit, eaque quos voluptatibus aliquid! </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="Pregunta Frecuente">
        <Dropdown.ItemText> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem inventore voluptates necessitatibus, asperiores quisquam incidunt corrupti possimus molestiae accusamus. Nostrum quibusdam accusantium velit animi perferendis fugit, eaque quos voluptatibus aliquid! </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="Pregunta Frecuente">
        <Dropdown.ItemText> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem inventore voluptates necessitatibus, asperiores quisquam incidunt corrupti possimus molestiae accusamus. Nostrum quibusdam accusantium velit animi perferendis fugit, eaque quos voluptatibus aliquid! </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="Pregunta Frecuente">
        <Dropdown.ItemText> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem inventore voluptates necessitatibus, asperiores quisquam incidunt corrupti possimus molestiae accusamus. Nostrum quibusdam accusantium velit animi perferendis fugit, eaque quos voluptatibus aliquid! </Dropdown.ItemText>
        </DropdownButton>               
      </Container>

      <Container fluid className="p-5">
        
        <h2>Vehículos eléctricos</h2>
        <Row>
        <Col>
          <h3>Patinetas Eléctricas</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654137220/q9hrxkhbusivfg3f7vs0.png' alt='foto-vehiculo' />
        </Col>
        <Col>
        <h3>Bicicletas Eléctricas</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654137440/o0kbkh9eense6nxkco3b.png' alt='foto-vehiculo' />
        </Col>
        </Row>
        <Row>
        <Col>
        <h3>Motos Eléctricas</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654137503/kzbokeaexsel0mq757q1.png' alt='foto-vehiculo' />
        </Col>
        <Col>
        <h3>Carros Eléctricas</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654137535/gyafmhrslunqqlux2ave.png' alt='foto-vehiculo' />
        </Col>
        </Row>
      </Container>
    </>
  )
};

export default Home;

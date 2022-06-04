
import React from "react";
import { Button, Carousel, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../Navbar";

const Home = () => {
  return (
    <>
      <NavBar />
      
      <Container fluit className="d-flex p-5">
        <Carousel> 
        <Carousel.Item >    
        <div className="d-flex">       
        <div className="p-5">
          <h1>Vehiculos Gama Alta</h1>
          <p>Son vehículos excepcionales encarnados en una carrocería única y futurista. Estos automóviles han sido diseñados para satisfacer los gustos más selectos y brindar potencia y comodidad con estilo y distinción.</p>
          <Button variant="success">Contáctanos</Button>
        </div>
        <div className="m-auto">
          <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359916/rabu9ghyankjrt2jucvm.jpg' alt='First slide'  style={{width:'25rem'}}/>
        </div>
        </div> 
        </Carousel.Item>
        <Carousel.Item>  
          <div className="d-flex">       
        <div className="p-5">
          <h1>Vehiculos Gama Media</h1>
          <p>Para clientes exigentes tenemos disponibles vehículos de alta fiabilidad con diseños modernos de alta calidad, deportivos y elegantes.</p>
          <Button variant="success">Contáctanos</Button>
        </div>
        <div className="m-auto">
          <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359672/e7aaxgianxbs90ltu56c.jpg' alt='Second slide' style={{width:'25rem'}}/>
        </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>  
          <div className="d-flex">     
        <div className="p-5">
          <h1>Vehiculos Gama Baja</h1>
          <p>Si lo que quieres es practicidad y economia, también contamos con vehículos eficientes perfectos para necesidades básicas a precios muy rentables.</p>
          <Button variant="success">Contáctanos</Button>
        </div>
        <div className="m-auto">
          <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654357822/dnbxzrjul6z1k3fkgsba.jpg' alt='Third slide' style={{width:'25rem'}} />
        </div>
        </div>  
        </Carousel.Item>
        <Carousel.Item> 
          <div className="d-flex">       
        <div className="p-5">
          <h1>Movilidad Sostenible</h1>
          <p>Queremos innovar y ser mas responsables con nuestro medio ambiente, recien estamos incursionando con los autos eléctricos, por el momento contamos con un solo modelo, pero esta siendo muy cotizado.</p>
          <Button variant="success">Contáctanos</Button>
        </div>
        <div className="m-auto">
          <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654358185/ydwnu9smg66js594c8qk.png' alt='fourth slide' style={{width:'25rem'}}/>
        </div>
        </div> 
        </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="p-5 text-center" id="quienes-somos" >
        <h2>¿Quiénes Somos?</h2>
        <p className="p-5">Somos una empresa dedicada a la renta de vehículos con o sin conductor, con variedad de vehiculos, para todas las necesidades, nos destacamos por nuestro buen servicio, rápido y confiable.</p>
      </Container>

      <Container className="p-5 text-center" id="preguntas-frecuentes">
        <h2>Preguntas Frecuentes</h2>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cómo es el Proceso para rentar un vehículo?">
        <Dropdown.ItemText> Entra a nuestra pagina e ingresa a la sección de reservas. </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cuales son los requisitos para rentar un vehículo?">
        <Dropdown.ItemText> Ver Requisitos para Rentar un Auto</Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Qué incluye la tarifa?">
        <Dropdown.ItemText> Básicamente tu tarifa incluye todo lo que necesitas para poder manejar el auto, por lo que no condicionaremos la entrega del auto a que adquieras ningún producto o protección adicional. Sin embargo contamos con una serie de servicios y protecciones adicionales las cuales son totalmente opcionales y que están pensadas para que tu viaje sea más cómodo. Para conocer más detalles y las condiciones aplicables vea nuestros Términos y Condiciones. </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cúal es la edad mínima para rentar un auto?">
        <Dropdown.ItemText> En MovE la edad mínima para rentar un auto es 25 años. </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cómo cancelo una reservación?">
        <Dropdown.ItemText> Favor de cancelar su reservación a través del mismo medio en que fue creada, con una anticipación mínima de 48 horas. Tenga en cuenta que algunas de nuestras tarifas más bajas NO SON REEMBOLSABLES.  Si existe un pre-pago y su tarifa fuera reembolsable, el reembolso del monto pagado será íntegro sí cancela con al menos anticipación requerida. Si su tarifa fuera reembolsable, pero su cancelación fuera hecha con menos de 48 horas de anticipación se cobrará como penalización el equivalente a un día de renta, rembolsandole la cantidad restante. </Dropdown.ItemText>
        </DropdownButton>               
      </Container>

      <Container fluid className="p-5 text-center" id="vehiculos">
        
        <h2 className="p-3">Vehículos</h2>
        <Row className="d-flex p-3">
        <Col>
          <h3>Gama alta</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359916/rabu9ghyankjrt2jucvm.jpg' alt='gama-alta' />
        </Col>
        <Col>
        <h3>Gama media</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359672/e7aaxgianxbs90ltu56c.jpg' alt='gama-media' />
        </Col>
        </Row>
        <Row className="d-flex p-3">
        <Col>
        <h3>Gama baja</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654357822/dnbxzrjul6z1k3fkgsba.jpg' alt='gama-baja' />
        </Col>
        <Col>
        <h3>Eléctricos</h3>
          <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654358185/ydwnu9smg66js594c8qk.png' alt='foto-vehiculo' />
        </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
};

export default Home;

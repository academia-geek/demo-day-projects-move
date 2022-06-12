
import React from "react";
import { Button, Carousel, Col, Container, Dropdown, DropdownButton, NavDropdown, Row } from "react-bootstrap";
import Booking from "../Booking";
import Footer from "../Footer";
import NavBar from "../Navbar";

const Home = () => {
  return (
    <>
      <NavBar />

      <Container fluit className="d-flex p-5">
        <Carousel>
          <Carousel.Item >
            <div className="d-flex text-center mt-5 ">
              <div className="p-5 mt-5">
                <h1>Vehículos Gama Alta</h1>
                <p className="m-1">Son vehículos excepcionales encarnados en una carrocería única y futurista. Estos automóviles han sido diseñados para satisfacer los gustos más selectos y brindar potencia y comodidad con estilo y distinción.</p>
                <Button href="#footer" variant="success">Contáctanos</Button>
              </div>
              <div className="m-auto">
                <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359916/rabu9ghyankjrt2jucvm.jpg' alt='First slide' style={{ width: '25rem' }} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-flex text-center mt-5 ">
              <div className="p-5 mt-5">
                <h1>Vehículos Gama Media</h1>
                <p className="m-1">Para clientes exigentes tenemos disponibles vehículos de alta fiabilidad con diseños modernos de alta calidad, deportivos, elegantes, brindandoles el mayor confort.</p>
                <Button href="#footer" variant="success">Contáctanos</Button>
              </div>
              <div className="m-auto">
                <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359672/e7aaxgianxbs90ltu56c.jpg' alt='Second slide' style={{ width: '25rem' }} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-flex text-center mt-5 ">
              <div className="p-5 mt-5">
                <h1>Vehículos Económicos</h1>
                <p className="m-1">Si lo que quieres es practicidad y economia, también contamos con vehículos eficientes perfectos para necesidades básicas a precios muy rentables.</p>
                <Button href="#footer" variant="success">Contáctanos</Button>
              </div>
              <div className="m-auto">
                <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654357822/dnbxzrjul6z1k3fkgsba.jpg' alt='Third slide' style={{ width: '25rem' }} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-flex text-center mt-5 ">
              <div className="p-5 mt-5">
                <h1>Movilidad Sostenible</h1>
                <p >Queremos innovar y ser mas responsables con nuestro medio ambiente, recien estamos incursionando con los autos eléctricos, por el momento contamos con un solo modelo, pero esta siendo muy cotizado.</p>
                <Button href="#footer" variant="success">Contáctanos</Button>
              </div>
              <div className="m-auto">
                <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654358185/ydwnu9smg66js594c8qk.png' alt='fourth slide' style={{ width: '25rem' }} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="p-5 text-center" id="quienes-somos" >
        <h2>¿Quiénes Somos?</h2>
        <p className="p-5">Somos una empresa que se dedica a ofrecer soluciones que logren atender necesidades de movilidad en Colombia a través de una plataforma tecnológica para gestionar reservaciones en el Alquiler de Vehículos con o sin conductor, con una gran variedad, para todas las necesidades, nos destacamos por nuestro buen servicio, rápido y confiable, así como por la claridad en nuestras tarifas y políticas.</p>
      </Container>

      <Container className="m-auto p-5 text-center border d-flex flex-column ">
        <Booking/>
      </Container>

      <Container className="p-5 text-left" id="preguntas-frecuentes">
        <h2>Preguntas Frecuentes</h2>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cómo es el Proceso para rentar un vehículo?">
          <Dropdown.ItemText > 
          <div >Entra a nuestra página, logueate e ingresa a la sección de reservas.</div>
            <div>Diligencia las sedes y fechas en las que quieres rentar tu Move.</div>
            <div>Escoge entre categorias y vehículos disponibles.</div>
            <div>Completa los datos personales para la reserva.</div>
            <div>Acepta términos y condiciones.</div>
            <div>Disfruta de tu vehículo</div>
           </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cuales son los requisitos para rentar un vehículo?">
          <Dropdown.ItemText> 
            <div>Ser adulto mayor de 21 años.</div>
            <div>Cedula de Ciudadanía o Pasaporte vigente.</div>
            <div>Licencia de Conducción vigente (Nacional o Extranjera).</div>
            <div>Tarjeta de Crédito como garantía/depósito del Contrato de Alquiler.</div>
            
            </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Qué incluye la tarifa?">
          <Dropdown.ItemText> Básicamente tu tarifa incluye todo lo que necesitas para poder manejar el auto, por lo que no condicionaremos la entrega del auto a que adquieras ningún producto o protección adicional. Sin embargo contamos con una serie de servicios y protecciones adicionales las cuales son totalmente opcionales y que están pensadas para que tu viaje sea más cómodo. Para conocer más detalles y las condiciones aplicables vea nuestros Términos y Condiciones. </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cúal es la edad mínima para rentar un auto?">
          <Dropdown.ItemText> En MovE la edad mínima para rentar un auto es 21 años. </Dropdown.ItemText>
        </DropdownButton>
        <DropdownButton variant="light" id="dropdown-item-button" title="¿Cómo cancelo una reservación?">
          <Dropdown.ItemText> Favor de cancelar su reservación a través del mismo medio en que fue creada, con una anticipación mínima de 48 horas. Tenga en cuenta que algunas de nuestras tarifas más bajas NO SON REEMBOLSABLES.  Si existe un pre-pago y su tarifa fuera reembolsable, el reembolso del monto pagado será íntegro sí cancela con al menos anticipación requerida. Si su tarifa fuera reembolsable, pero su cancelación fuera hecha con menos de 48 horas de anticipación se cobrará como penalización el equivalente a un día de renta, rembolsandole la cantidad restante. </Dropdown.ItemText>
        </DropdownButton>
      </Container>

      <Container fluid className="p-5 text-center" id="vehiculos">

        <h2 className="p-3">Vehículos</h2>
        <Row className="d-flex p-3">
          <Col>
            <h3>Gama Alta</h3>
            <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359916/rabu9ghyankjrt2jucvm.jpg' alt='gama-alta' />
          </Col>
          <Col>
            <h3>Gama Media</h3>
            <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654359672/e7aaxgianxbs90ltu56c.jpg' alt='gama-media' />
          </Col>
        </Row>
        <Row className="d-flex p-3">
          <Col>
            <h3>Económicos</h3>
            <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654357822/dnbxzrjul6z1k3fkgsba.jpg' alt='gama-baja' />
          </Col>
          <Col>
            <h3>Eléctricos</h3>
            <img className="w-50" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1654358185/ydwnu9smg66js594c8qk.png' alt='foto-vehiculo' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
};

export default Home;

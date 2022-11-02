import React, { useState } from 'react';
import foto from '../Images/69921664.jpeg'

import { Row, Col, Button, Offcanvas } from 'react-bootstrap';

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className='testRowHome'>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text
        </Offcanvas.Body>
      </Offcanvas>

      <img className='fotoHome' src={foto} alt="" />
      <Col className='testCol'>
        <h1>Danilo Ramalho Silva</h1>
      </Col>      
    </Row>  
  );
}

export default Home;

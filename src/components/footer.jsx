import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ImageIcon from './ImageIcon';

import linkedin from '../Images/linkedin.svg';
import gitHub from '../Images/gitHub.svg';
import whatsapp from '../Images/whatsapp.svg';

const LINK_LINKEDIN = 'https://www.linkedin.com/in/danilo-ti-ramalho/';
const LINK_GITHUB = 'https://github.com/DaniloRamalhoSilva';
const LINK_WHATSAPP = 'https://api.whatsapp.com/send?phone=5511952229013&text=Ol%C3%A1%20Danilo%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.%20';

function Footer() {
  return (
    <div className='containerFooter'>
      <Navbar fixed="bottom">
        <Container>
         <ImageIcon imag={linkedin} linkPaht={ LINK_LINKEDIN } ></ImageIcon>
         <ImageIcon imag={gitHub} linkPaht={ LINK_GITHUB } ></ImageIcon>
         <ImageIcon imag={ whatsapp } linkPaht={ LINK_WHATSAPP } ></ImageIcon>
        </Container>
      </Navbar>
    </div>    
  );
}

export default Footer;

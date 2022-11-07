import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import AboutResume from '../components/AboutResume';
import AboutTimeLine from '../components/AboutTimeLine';

function About() {
  const [type, setType] = useState(true);

  return (
    <div className='containerAbout' id='about'>
      <h1>Sobre Mim</h1>
      <hr />
      <div className='navButton'>
        <Button variant="outline-light" onClick={ () => setType( true ) }>Resumo</Button>
        <Button variant="outline-light" onClick={ () => setType( false ) }>Linha do Tempo</Button>
      </div>      
      {
        type ? 
        <AboutResume></AboutResume> : 
        <AboutTimeLine></AboutTimeLine>
      }
    </div>  
  );
}

export default About;
import React from 'react';
import foto from '../Images/69921664.jpeg'
import { Row, Col, Figure } from 'react-bootstrap';

function Home() {
  return (
    <Row >   
      <Figure >
        <Figure.Image
        width="60%"
        fluido
        roundedCircle
        alt="171x180"
        src={foto}
        />
      </Figure>      
      <Col className='testCol'>
        <h3>Aqui é o lugar certo para conhecer meu trabalho e tudo sobre mim.</h3>
        <br />        
        <h6>Seja muito bem vindo!</h6>
        <hr />
        <p>
          Sou Danilo Ramalho Silva, 32 anos, de São Paulo Capital, apaoixonado por tecnologia e desenvolvimento pessoal.
        </p>
        <p>
          Me formei em Analise e Desenvolvimento de Sisteme em 2016 e atualmente estou me especializando em desenvolvimento web na Trybe com o intuito de me tornar um desenvolvedor full steck.
        </p>
        <p>
          Se quiser saber um poquinho mais de como vim parar na programação e conhecer minha hestoria um pouco melhor rola ai até o “Sobre mim” você acaba de se tornar meu convidado especial.
        </p>
        <p>
          Por aqui voce tambem pode ver meus trabalhos proficionais e academicos, minhas steks, formação academica, ultimos trabalho e ate algus dos meus hobs, sinta-se a vontade a casa site e todo seu.
        </p>
      </Col>      
    </Row>     
  );
}

export default Home;

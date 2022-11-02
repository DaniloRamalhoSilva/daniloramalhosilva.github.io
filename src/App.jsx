import Home from './pages/Home';
import Sobre from './pages/Sobre';
import './App.css';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Home></Home>
      <Sobre></Sobre>
    </Container>  
  );
}

export default App;

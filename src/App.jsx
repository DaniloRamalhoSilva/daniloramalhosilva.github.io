// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navigationbar from './components/Navigationbar';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
        <Navigationbar></Navigationbar>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
    </div>        
  );
}

export default App;

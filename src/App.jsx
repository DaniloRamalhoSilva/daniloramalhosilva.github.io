import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

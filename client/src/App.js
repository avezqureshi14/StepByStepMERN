import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
function App() {

  return (
  <>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} /> 
    <Route path="/contact" component={Contact} /> 
    <Route path="/login" component={Login} /> 
    <Route path="/register" component={Register} /> 
  </Switch>
  <Footer/>

  </>
  );
}

export default App;

import React from 'react'
import './App.css';



import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';


import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Switch>
       <Route exact path="/" component= {Home}    />
       <Route exact path="/about" component= {About}    />
       <Route exact path="/project" component= {Project}    />
       <Route exact path="/contact" component= {Contact}    />
       <Redirect to="/" />
     </Switch>
     {/* <Footer/> */}
    </div>
  );
}

export default App;

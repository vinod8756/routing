import React from 'react';
import About from './about';
import './App.css';
import Nav from './nav';
import Shop from './shop';
import {BrowserRouter as Router , Switch , Route,} from 'react-router-dom'


const App = () => {
  return (
    <Router>
       <div className="App">
     <Nav/>
     <Route path = '/about' exact component = {About}/>
     <Route path = '/shop' exact component = {Shop}/>
     {/* <Route path = '/' extact  component = 'HOME PAGE'/>     */}
     </div>
    </Router>
   
  );
}

export default App;

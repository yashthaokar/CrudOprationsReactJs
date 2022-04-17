
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Read from './Components/Read';
 import Update from './Components/Update';
 import Creat from './Components/Creat';
 import Delet from './Components/Delet';


function App() {
  return (
    <Router>
    <div className="App">
    <div> <Route path='/creat' compoent={Creat}/></div>
      <div> <Route path='/read' compoent={Read}/></div>
    
      
     <Route path='/update' compoent={Update}/>
     <Route path='/delet' compoent={Delet}/>
     
     </div>
    
    </Router>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Read from "./Components/Read";
import Update from "./Components/Update";
import Creat from "./Components/Creat";
import Delet from "./Components/Delet";
import A from "./Components/A";

function App() { 
  return (
    <Routes>
     
       
          <Route path="/creat" element={<Creat/>} />
       
      
          <Route path="/read" element={<Read/>} />
      

        <Route path="/update" element={<Update/>} />
        <Route path="/delet" element={<Delet/>} />
      
    </Routes>
  );
}

export default App;

import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';  
import {useState } from "react"
import './App.css';

function Main(props){
  const nombres= props.nombres.map((nombre, index)=>{
    return(<div key={index}>
      <p><li>{nombre}</li></p>
    </div>
    )
      
    
  })
  return nombres
}

function App() {
  let [nombres, setNombres] = useState(["ricardo", "lucia","paco"])
  return (
   <BrowserRouter>
       <h1>
         Rutas con react
       </h1>
       <Link to="/nombres">nombres</Link>
   <Route path="/nombres">
   <Main nombres={nombres}/>
   </Route>
   </BrowserRouter>
  );
}

export default App;

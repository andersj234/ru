import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';  
import { useState } from 'react';
import './App.css';

function Gatos(){
  const [gatos, setGatos]= useState(["https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg", "https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg"])

  return(
    gatos.map((gato, indice)=>{
      return(<img src={gato} alt={indice}/>)
    })
  )

}

function Perros(){
  const [perros, setPerros]= useState(["https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", "https://www.nationalgeographic.com.es/medio/2021/03/09/perro_4da5a8be_800x1200.jpg"])
  return(
    perros.map((perro, indice)=>{
      return(<img src={perro} alt={indice}/>)
    })
  )
}
function App() {

  return (
   <BrowserRouter>
   <Route path= "/">
    <Link to="/gatos">gatos</Link>
   <Link to="/perros">perros</Link>
    </Route>
   <Route exact path="/gatos" >
   <Gatos />
   </Route>
   <Route exact path="/perros"> {/* recuerda que exact path te lleva solo a la ruta donde esta el contenido y no a sus anteriores por lo que solo te mostrara exactamente dentro de el */}
   <Perros /> 
   </Route>
    <Link to="/">volver a la pagina principal</Link>
   </BrowserRouter>
  );
}

export default App;

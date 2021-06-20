import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import catalogo from "./catalogo";
import Peliculas from "./Peliculas";

function App() {
  const [peliculas, setPeliculas] = useState(catalogo); /* declaramos peliculas y luego le hacemos un map */

  let rutas = peliculas.map((pelicula, index) => {
    return (
      <Route path={"/" + pelicula.titulo}>  {/* en otro enlace se mostrara la sinopsis cuando queramos entrar en esa ruta */}
        <p>{pelicula.sinopsis}</p>
        <Link to="/">Volver</Link>
      </Route>
    );
  });

  return (
    <BrowserRouter>
      <Route exact path="/">
        <div id="catalogo">
          <Peliculas peliculas={peliculas} />
        </div>
      </Route>
      {rutas}
    </BrowserRouter>
  );
}

export default App;
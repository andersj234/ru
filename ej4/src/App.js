import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import plantilla from "./plantilla";
import Equipo from "./Equipo";
import Jugador from "./Jugador";

function App() {
  const rutas = plantilla.map((jugador, index) => {
    return (
      <Route path={"/" + jugador.apodo}>
        <Jugador
          key={index}
          full={true} //cuando full sea true enviaremos toda la información
          nombre={jugador.nombre}
          apodo={jugador.apodo} //hemos hecho que los apodos sean links con rutas de cada jugador con la respectiva información
          altura={jugador.altura}
          peso={jugador.peso}
          nacionalidad={jugador.nacionalidad}
          edad={jugador.edad}
          foto={jugador.foto}
        />
      </Route>
    );
  });

  return (
    <BrowserRouter>
    <Link to="/equipo">equipo</Link>
      <Route path="/equipo">
        <div className="catalogo">
          <Equipo plantilla={plantilla} />
        </div>
      </Route>
      {rutas} {/* estamos llamando al map desde aqui o eso creo*/}
    </BrowserRouter>
  );
}

export default App;
import { Link } from "react-router-dom";

function Jugador(props) {
  if (props.full) { //si full es true muestra esto
    return (
      <div key={props.nombre} className="card">
        <img src={props.foto} alt={props.apodo} />
        <p>Nombre: {props.nombre}</p>
        <p>Apodo: {props.apodo}</p>
        <p>
          Altura: {props.altura} | Peso: {props.peso}
        </p>
        <p>Nacionalidad: {props.nacionalidad}</p>
        <p>Edad: {props.edad}</p>
        <Link to="/equipo">
          <p>Volver</p>
        </Link>
      </div>
    );
  } else {
    return (//si full es false muestra esto
      <div key={props.index} className="card">
        <img src={props.foto} alt={props.apodo} />
        <Link to={"/" + props.apodo}>
          <h1>{props.nombre}</h1>
        </Link>
      </div>
    );
  }
}

export default Jugador;
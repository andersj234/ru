import { Link } from "react-router-dom"; // como nos hacen falta las etiquetas Link las importamos para poder usarlas en el return

function Pelicula(props) {
  return (
    <div key={props.index} className="card">
      <img src={props.cartel} alt={props.titulo} />
      <Link to={"/" + props.titulo}> {/* estamos haciendo que el link se pueda modificar y buscar lo que se quiero por ejemplo enviando en un input los datos para que busque la url */}
        <h1>{props.titulo}</h1>
      </Link>
    </div>
  );
}

function Peliculas(props) {
  return props.peliculas.map((pelicula, index) => {
    return (
      <Pelicula
        key={index}
        cartel={pelicula.cartel}
        titulo={pelicula.titulo}
        index={index}
      />
    );
  });
}

export default Peliculas;
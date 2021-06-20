import Jugador from "./Jugador";

function Equipo(props) {
  return props.plantilla.map((jugador, index) => {
    return (
      <Jugador
        full={false} //le estamos pasando que full sea false para enseñarle una cosa y que cuando sea true mostrarle otra
        apodo={jugador.apodo} //aqui creamos cada jugador del map con la informacion que queremos y la pasamos
        index={index}
        nombre={jugador.nombre}
        foto={jugador.foto}
      />
    );
  });
}

export default Equipo;
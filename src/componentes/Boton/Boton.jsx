
import Estilos from "./Boton.module.css";

const Boton = (propiedades) => {
  return (
    <>
      <button className={Estilos.boton}>{propiedades.greeting}</button>
    </>
  );
};

export default Boton;

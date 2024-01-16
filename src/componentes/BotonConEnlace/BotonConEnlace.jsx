import Estilos from "./Boton.module.css";

function BotonConEnlace(propiedades) {
  return (
    <>

      <a href={propiedades.href} className={Estilos[propiedades.clase]}>
        {propiedades.msj}
      </a>
    </>
  );
}

export default BotonConEnlace;

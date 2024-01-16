import React from "react";
import CarritoDeCompras from "../CardWidget/CarritoDeCompras";
import Boton from "../BotonConEnlace/BotonConEnlace";
import Clase from "./NavBar.module.css";

function NavBar({ toggleSidebar }) {
  return (
    <nav className={Clase.contenedorNavBar}>
      <div className={Clase.nombreTienda}>PokeStore</div>
      
      <img src="" alt="" />
      <CarritoDeCompras />
      <Boton msj="Iniciar Sesion" clase="boton" />
    </nav>
  );
}

export default NavBar;

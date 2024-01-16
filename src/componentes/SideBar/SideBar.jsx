// SideBar.jsx

import React, { useState } from "react";
import Clase from "./SideBar.module.css";
import ClaseBtn from "../BotonConEnlace/Boton.module.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <button className={Clase.toggleButton} onClick={toggleMenu}>
        ≡
      </button>

      {menuVisible && (
        <nav className={Clase.contenedor}>
          <ul className={Clase.contenedorItems}>
            <li className={Clase.items}>
              <NavLink className={ClaseBtn.botonSideBar} to="/">
                {" "}
                Inicio
              </NavLink>
            </li>
            <li className={Clase.items}>
              <NavLink className={ClaseBtn.botonSideBar}> Categoría</NavLink>
              <ul className={Clase.subMenu}>
                <li className={Clase.itemsSubMenu}>
                  <NavLink className={ClaseBtn.boton} to={"/categori/Pantalones"}>
                    Pantalones
                  </NavLink>
                </li>
                <li className={Clase.itemsSubMenu}>
                  <NavLink className={ClaseBtn.boton} to={"/categori/Zapatillas"}>
                    Zapatillas
                  </NavLink>
                </li>
                <li className={Clase.itemsSubMenu}>
                  <NavLink className={ClaseBtn.boton} to={"/categori/Camisetas"}>
                    Camisetas
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={Clase.items}>
              <NavLink className={ClaseBtn.botonSideBar} to="/">
                Nosotros
              </NavLink>
            </li>
            <li className={Clase.items}>
              <NavLink className={ClaseBtn.botonSideBar} to="/ayuda">
                {" "}
                Ayuda
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default SideBar;

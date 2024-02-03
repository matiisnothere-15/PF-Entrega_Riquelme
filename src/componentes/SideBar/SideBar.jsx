import Clase from "./SideBar.module.css";
import ClaseBtn from "../BotonConEnlace/Boton.module.css";
import { NavLink } from "react-router-dom";
import Imagen from '../Preloader/asset/logo.png'
import { SlHandbag, SlQuestion, SlGrid } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";



function SideBar() {
  return (
    <>
      <nav className={Clase.contenedor}>
       <NavLink to={"/"}> <img className={Clase.img} src={Imagen}/></NavLink>
        <ul className={Clase.contenedorItems}>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/">
            <IoHomeOutline/> Inicio
            </NavLink>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar}><SlGrid /> Categoria </NavLink>
            <ul className={Clase.subMenu}>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to="/categori/Pantalones">
                  Pantalones
                </NavLink>
              </li>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to="/categori/Camisetas">
                  Camisetas
                </NavLink>
              </li>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to="/categori/Zapatillas">
                  Zapatillas
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/cart">
            <SlHandbag /> Compras 
            </NavLink>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/ayuda">
            <SlQuestion /> Ayuda
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default SideBar;

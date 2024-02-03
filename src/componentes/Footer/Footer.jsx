import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import Clase from './Footer.module.css';

const Footer = () => {
  return (
    <div className={Clase.contenedor}>
      <div className={Clase.enlaces}>
        <a href="#">Términos y Condiciones</a>
      </div>
      <div className={Clase.redesSociales}>
        <a href="#" className={Clase.link}>
          <FaWhatsapp className={Clase.icono} />
        </a>
        <a href="#" className={Clase.link}>
          <FaInstagram className={Clase.icono} />
        </a>
        <a href="#" className={Clase.link}>
          <FaTiktok className={Clase.icono} />
        </a>
      </div>
      <a href="#">© 2024 PokeStore®.Todos los derechos reservados. Powered by Matiisnothere.</a>
    </div>
  );
};

export default Footer;

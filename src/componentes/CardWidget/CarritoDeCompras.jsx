import Clase from "./CarritoDeCompras.module.css";
import Imagen from "./asset/carrito.png";
import { UseCart } from "../../context/CartContext";

function CarritoDeCompras() {
  const { totalQuantity } = UseCart();

  return (
    <div className={Clase.contenedorCarritoDeCompra}>
      <img className={Clase.imagenCarritoDeCompra} src={Imagen} alt="" />
      {totalQuantity}
    </div>
  );
}
export default CarritoDeCompras;

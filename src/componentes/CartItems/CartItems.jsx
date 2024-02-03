// CartItems.jsx
import React from 'react';
import Clase from './CartItems.module.css';
import { UseCart } from '../../context/CartContext';

const CartItems = ({ prod }) => {
  const { removeItems, increaseQuantity, decreaseQuantity } = UseCart();

  return (
    <div className={Clase.contenedor}>
      <img className={Clase.imagen} src={prod.imagen} alt={prod.nombre} />
      <h3>{prod.nombre}</h3>
      <h4 className={Clase.cantidad}>Cantidad: {prod.quantity}</h4>
      <h4 className={Clase.precio}>Precio por unidad: ${prod.precio}</h4>
      <h3 className={Clase.precio}>Total ${prod.precio * prod.quantity}</h3>
      <div className={Clase.botones}>
        <button onClick={() => decreaseQuantity(prod.id)}>-</button>
        <button onClick={() => increaseQuantity(prod.id)}>+</button>
        <button onClick={() => removeItems(prod.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItems;

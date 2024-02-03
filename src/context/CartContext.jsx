import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const addItems = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, { ...productToAdd, quantity: 1 }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItems = (id) => {
    const newCart = cart.filter((prod) => prod.id !== id);
    setCart(newCart);
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === id && prod.quantity > 1
          ? { ...prod, quantity: prod.quantity - 1 }
          : prod
      )
    );
  };

  const getTotalQuantity = () => {
    let acc = 0;
    cart.forEach((prod) => (acc += prod.quantity));
    return acc;
  };

  const ClearCart = () => {
    setCart([]);
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let acc = 0;
    cart.forEach((prod) => (acc += prod.quantity * prod.precio));
    return acc;
  };

  const total = getTotal();

  return (
    <CartContext.Provider
      value={{
        cart,
        addItems,
        isInCart,
        removeItems,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
        ClearCart,
        loading,
        setLoading,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  return useContext(CartContext);
};

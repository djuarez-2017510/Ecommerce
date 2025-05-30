import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const calcularTotal = (items) =>
    items.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const addToCart = (item) => {
    const exists = cartItems.find((i) => i.id === item.id);
    const nuevaCantidad = Math.min(item.cantidad, 9);

    let nuevosItems;
    if (exists) {
      nuevosItems = cartItems.map((i) =>
        i.id === item.id
          ? { ...i, cantidad: Math.min(i.cantidad + nuevaCantidad, 9) }
          : i
      );
    } else {
      nuevosItems = [...cartItems, { ...item, cantidad: nuevaCantidad }];
    }

    const total = calcularTotal(nuevosItems);
    if (total > 999.99) {
      alert("Error: El total del carrito no puede exceder $999.99");
      return;
    }

    setCartItems(nuevosItems);
  };

  const updateCantidad = (id, nuevaCantidad) => {
    const nuevosItems = cartItems.map((item) =>
      item.id === id ? { ...item, cantidad: nuevaCantidad } : item
    );

    const total = calcularTotal(nuevosItems);
    if (total > 999.99) {
      alert("ERROR: El total del carrito no puede exceder $999.99");
      return;
    }

    setCartItems(nuevosItems);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCantidad,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);


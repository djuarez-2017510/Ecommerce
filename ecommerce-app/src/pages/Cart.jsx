import { useCart } from "../hooks/CartContext";
import CartItem from "../components/CartItem";
import { useMemo } from "react";

function Cart() {
  const { cartItems, clearCart } = useCart();

  const subtotal = useMemo(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.cantidad, 0);
    return total > 999.99 ? "ERROR" : `$${total.toFixed(2)}`;
  }, [cartItems]);

  return (
    <main className="cart-page">
      <h2>Carrito de compras</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <p className="subtotal">Subtotal: {subtotal}</p>

          <div className="cart-actions">
            <button onClick={() => alert("Compra realizada")}>Comprar</button>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
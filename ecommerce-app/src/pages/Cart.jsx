import CartItem from "../components/CartItem";

function Cart() {
  return (
    <main>
      <h2>Carrito de compras</h2>
      <CartItem />
      <p>Subtotal: $300</p>
      <button>Comprar</button>
      <button>Vaciar carrito</button>
    </main>
  );
}

export default Cart;


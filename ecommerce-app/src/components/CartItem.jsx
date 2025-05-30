import { useCart } from "../hooks/CartContext";

function CartItem({ item }) {
  const { addToCart, removeFromCart, updateCantidad } = useCart();

  const aumentar = () => {
    if (item.cantidad < 9) {
      updateCantidad(item.id, item.cantidad + 1);
    }
  };

  const disminuir = () => {
    if (item.cantidad === 1) {
      removeFromCart(item.id);
    } else {
      updateCantidad(item.id, item.cantidad - 1);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-img" />
      <div className="cart-info">
        <h4>{item.name}</h4>
        <p>Precio unitario: ${item.price}</p>
        <div className="cantidad-control">
          <button onClick={disminuir}>-</button>
          <span>{item.cantidad}</span>
          <button onClick={aumentar}>+</button>
        </div>
        <p><strong>Total:</strong> ${item.price * item.cantidad}</p>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="eliminar-btn">
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
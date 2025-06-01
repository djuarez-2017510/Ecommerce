import { useCart } from "../hooks/CartContext";

function CartItem({ item }) {
  const { updateCantidad, removeFromCart } = useCart();

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
      <img className="cart-img" src={item.image} alt={item.name} />
      <div className="cart-info">
        <h4>{item.name}</h4>
        <p>Precio unitario: ${item.price}</p>
        <div className="cantidad-control">
          <button onClick={disminuir}>-</button>
          <span>{item.cantidad}</span>
          <button onClick={aumentar}>+</button>
        </div>
        <p><strong>Total:</strong> ${(item.price * item.cantidad).toFixed(2)}</p>
      </div>
      <button className="eliminar-btn" onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;

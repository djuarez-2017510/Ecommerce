import { useState } from "react";
import { useCart } from "../hooks/CartContext";

function ProductModal({ producto, onClose }) {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();
  const aumentar = () => cantidad < 9 && setCantidad(cantidad + 1);
  const disminuir = () => cantidad > 1 && setCantidad(cantidad - 1);
  const agregarAlCarrito = () => {
    addToCart({ ...producto, cantidad });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img
          src={producto.image}
          alt={producto.name}
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
        <h3>{producto.name}</h3>
        <p>{producto.description}</p>
        <p><strong>Precio:</strong> ${producto.price}</p>
        <div className="cantidad-control">
          <button onClick={disminuir}>-</button>
          <span>{cantidad}</span>
          <button onClick={aumentar}>+</button>
        </div>
        <div className="modal-buttons">
          <button onClick={agregarAlCarrito}>Añadir al carrito</button>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

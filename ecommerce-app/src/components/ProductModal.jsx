import { useState } from "react";

function ProductModal({ producto, onClose, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => {
    if (cantidad < 9) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const agregarAlCarrito = () => {
    onAdd({ ...producto, cantidad });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p>Precio: {producto.precio}</p>

        <div className="cantidad-control">
          <button onClick={disminuir}>-</button>
          <span>{cantidad}</span>
          <button onClick={aumentar}>+</button>
        </div>

        <button onClick={agregarAlCarrito}>Añadir al carrito</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ProductModal;

import { useState } from "react";
import ProductModal from "./ProductModal";

function ProductCard({ producto, onAdd }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="product-card">
      <img src={producto.img} alt={producto.nombre} />
      <p>{producto.nombre}</p>
      <p>{producto.precio}</p>
      <button onClick={() => setMostrarModal(true)}>Info</button>

      {mostrarModal && (
        <ProductModal
          producto={producto}
          onClose={() => setMostrarModal(false)}
          onAdd={onAdd}
        />
      )}
    </div>
  );
}

export default ProductCard;

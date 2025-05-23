import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [carrito, setCarrito] = useState([]);

  const productosFake = [
    {
      nombre: 'Botas Fox MX',
      descripcion: 'Botas resistentes para motocross',
      precio: '$150',
      img: 'https://via.placeholder.com/150',
    },
    // ...otros productos
  ];

  const agregarAlCarrito = (productoNuevo) => {
    setCarrito([...carrito, productoNuevo]);
    console.log("Carrito:", [...carrito, productoNuevo]); // debug
  };

  return (
    <main>
      <h2>Productos disponibles</h2>
      <div className="product-grid">
        {productosFake.map((p, i) => (
          <ProductCard key={i} producto={p} onAdd={agregarAlCarrito} />
        ))}
      </div>
    </main>
  );
}

export default Products;

import { useState } from "react";
import products from "../data/productsData";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main>
      <h2>Productos</h2>
      <div className="grid">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onInfo={() => setSelectedProduct(prod)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          producto={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}

export default Products;

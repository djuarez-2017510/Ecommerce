import { useMemo, useState, useEffect } from "react";
import products from "../data/productsData";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useNavigation } from "../hooks/NavigationContext";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { seenProducts, addViewedProduct } = useNavigation();

  // Recomienda productos de la misma categoría que los vistos (pero distintos)
  const recomendaciones = useMemo(() => {
    const vistos = products.filter((p) => seenProducts.includes(p.id));
    const categorias = [...new Set(vistos.map((p) => p.category))];
    return products.filter(
      (p) => categorias.includes(p.category) && !seenProducts.includes(p.id)
    );
  }, [seenProducts]);

  // Agrega producto al historial de navegación al abrir modal
  useEffect(() => {
    if (selectedProduct) addViewedProduct(selectedProduct.id);
  }, [selectedProduct]);

  return (
    <main>
      {recomendaciones.length > 0 && (
        <>
          <h3>Recomendados para ti</h3>
          <div className="grid">
            {recomendaciones.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onInfo={() => setSelectedProduct(prod)}
              />
            ))}
          </div>
        </>
      )}

      <h2 style={{ marginTop: "2rem" }}>Todos los productos</h2>
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

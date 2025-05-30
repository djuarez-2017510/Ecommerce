function ProductCard({ product, onInfo }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={onInfo}>Ver info</button>
    </div>
  );
}

export default ProductCard; 
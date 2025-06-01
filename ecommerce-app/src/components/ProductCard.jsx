import { useCart } from "../hooks/CartContext";
import { useFavorites } from "../hooks/FavoritesContext";
import RatingStars from "./RatingStars";
import DiscountPrice from "./DiscountPrice";

function ProductCard({ product, onInfo }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const favorito = isFavorite(product.id);

  return (
    <div className="product-card">
      <img className="product-img" src={product.image} alt={product.name} />
      <h3 className="product-name">{product.name}</h3>
      
      <RatingStars initial={3} onRate={(val) => console.log("Rating:", val)} />
      <DiscountPrice price={product.price} discount={0.2} />
      
      <div className="card-buttons">
        <button
          className="btn-fav"
          onClick={() => toggleFavorite(product.id)}
          style={{ color: favorito ? "red" : "inherit" }}
        >
          ❤
        </button>
        <button className="btn-info" onClick={onInfo}>Ver info</button>
      </div>
    </div>
  );
}

export default ProductCard;


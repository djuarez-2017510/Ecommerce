function DiscountPrice({ price, discount = 0.2 }) {
  const precioNum = parseFloat(price);
  const precioDescuento = (precioNum * (1 - discount)).toFixed(2);

  return (
    <div className="price-section">
      <span className="old-price">${precioNum.toFixed(2)}</span>
      <span className="new-price">${precioDescuento}</span>
    </div>
  );
}

export default DiscountPrice;
import { useState } from "react";

function RatingStars({ initial = 0, onRate }) {
  const [hovered, setHovered] = useState(null);
  const [rating, setRating] = useState(initial);

  const handleClick = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((val) => (
        <span
          key={val}
          onClick={() => handleClick(val)}
          onMouseEnter={() => setHovered(val)}
          onMouseLeave={() => setHovered(null)}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            color: (hovered || rating) >= val ? "#ffc107" : "#ccc",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingStars;


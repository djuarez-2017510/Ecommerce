// src/hooks/FavoritesContext.jsx
import { createContext, useContext, useRef } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const favoritesRef = useRef([]);

  const toggleFavorite = (id) => {
    if (favoritesRef.current.includes(id)) {
      favoritesRef.current = favoritesRef.current.filter((favId) => favId !== id);
    } else {
      favoritesRef.current.push(id);
    }
  };

  const isFavorite = (id) => favoritesRef.current.includes(id);

  return (
    <FavoritesContext.Provider value={{ toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}



import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [seenProducts, setSeenProducts] = useState([]);

  const addViewedProduct = (id) => {
    if (!seenProducts.includes(id)) {
      setSeenProducts((prev) => [...prev, id]);
    }
  };

  return (
    <NavigationContext.Provider value={{ seenProducts, addViewedProduct }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);


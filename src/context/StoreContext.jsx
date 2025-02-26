import products from "../assets/data/data.js";
import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const loadItems = () => {
    setItems(products);
  };

  return (
    <StoreContext.Provider value={{ items, loadItems }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};

import products from "../assets/data/data.js";
import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [productsInStore, setProductsInStore] = useState([]);

  const loadProducts = () => {
    setProductsInStore(products);
  };

  const addToCart = (product) => {
    setProductsInStore((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.inCart) {
          return prevProduct;
        }
        return prevProduct.id === product.id
          ? { ...prevProduct, inCart: true }
          : prevProduct;
      });
    });
  };

  return (
    <StoreContext.Provider value={{ productsInStore, loadProducts, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};

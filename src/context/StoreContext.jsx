import { useEffect, useState, createContext, useContext } from "react";
import products from "../assets/data/data.js";
import {
  getItemFromStorage,
  getParsedItemFromStorage,
  setItemInStorage,
} from "../localStorage";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [productsInStore, setProductsInStore] = useState([]);

  useEffect(() => {
    const savedCart = getParsedItemFromStorage("cart");

    if (savedCart && savedCart.length > 0) {
      setProductsInStore(savedCart);
    } else {
      const initialProducts = products.map((product) => ({
        ...product,
        inCart: false,
        quantity: 0,
      }));
      setProductsInStore(initialProducts);
    }
  }, []);

  useEffect(() => {
    if (productsInStore.length > 0) {
      setItemInStorage("cart", productsInStore);
    }
  }, [productsInStore]);

  const addToCart = (productId) => {
    setProductsInStore((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              inCart: true,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  };

  const removeFromCart = (productId) => {
    setProductsInStore((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              inCart: false,
              quantity: 0,
            }
          : product
      )
    );
  };

  const updateQuantity = (productId, increment) => {
    setProductsInStore((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: Math.max(0, product.quantity + increment),
              inCart: product.quantity + increment > 0,
            }
          : product
      )
    );
  };

  const getCartProducts = () => {
    const cartProducts = productsInStore.filter((product) => product.inCart);
    console.log("Products in cart:", cartProducts);
    return cartProducts;
  };

  const getCartCount = () => {
    return productsInStore.reduce(
      (count, product) => count + product.quantity,
      0
    );
  };

  const getCartTotal = () => {
    const total = productsInStore.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    return parseFloat(total.toFixed(2));
  };

  const clearCart = () => {
    setProductsInStore((prevProducts) =>
      prevProducts.map((product) => ({
        ...product,
        inCart: false,
        quantity: 0,
      }))
    );
  };

  const setLocalStorage = () => {
    if (productsInStore.length !== 0) {
      const inCartItems = productsInStore.filter((item) => item.inCart);
      setItemInStorage("cart", inCartItems);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        productsInStore,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartProducts,
        getCartCount,
        getCartTotal,
        clearCart,
        setLocalStorage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};

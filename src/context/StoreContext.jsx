import { useEffect, useState, createContext, useContext } from "react";
import products from "../assets/data/data.js";
import { getParsedItemFromStorage, setItemInStorage } from "../localStorage";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [productsInStore, setProductsInStore] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  useEffect(() => {
    if (isCartLoaded) return;
    const savedCart = getParsedItemFromStorage("cart");
    console.log("Loaded cart from storage:", savedCart);

    if (Array.isArray(savedCart) && savedCart.length > 0) {
      const validatedCart = savedCart
        .map((product) => ({
          ...product,
          price: parseFloat(product.price) || 0,
          quantity: parseInt(product.quantity) || 0,
          inCart: product.quantity > 0,
        }))
        .filter((product) => product.price >= 0 && product.quantity >= 0);

      setProductsInStore(validatedCart);
    } else {
      const initialProducts = products.map((product) => ({
        ...product,
        inCart: false,
        quantity: 0,
      }));
      setProductsInStore(initialProducts);
    }
    setIsCartLoaded(true);
  }, [isCartLoaded]);

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
    return cartProducts;
  };

  const getCartCount = () => {
    return productsInStore && productsInStore.length > 0
      ? productsInStore.reduce(
          (count, product) => count + (product.quantity || 0),
          0
        )
      : 0;
  };

  const getCartTotal = () => {
    const total =
      productsInStore && productsInStore.length > 0
        ? productsInStore.reduce((total, product) => {
            const price = parseFloat(product.price) || 0;
            const quantity = parseInt(product.quantity) || 0;

            if (price >= 0 && quantity > 0) {
              return total + price * quantity;
            }
            return total;
          }, 0)
        : 0;

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
    setItemInStorage("cart", []);
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

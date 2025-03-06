import React, { useState, useEffect } from "react";
import { ShoppingCartIcon, XIcon, Trash2 } from "lucide-react";
import style from "./ShoppingCart.module.css";
import { useStore } from "../../context/StoreContext";
import ProductCard from "../ProductCard/ProductCard";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    productsInStore,
    getCartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    setCartProducts,
  } = useStore();

  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart && typeof setCartProducts === "function") {
        setCartProducts(JSON.parse(storedCart));
      }
    };
    loadCartFromLocalStorage();
  }, [setCartProducts]);

  const cartProducts = productsInStore.filter((product) => product.inCart);

  const handleIncreaseQuantity = (productId) => {
    addToCart(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    updateQuantity(productId, -1);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
    localStorage.removeItem("cart");
  };

  return (
    <>
      <button className={style.shoppingCartBtn} onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon className={style.cartIcon} />
        <span className={style.cartCount}>{getCartCount() || 0}</span>
      </button>
      <div
        className={`${style.cartWrapper} ${
          isOpen ? style.cartOpen : style.cartClosed
        }`}
      >
        <div className={style.cartHeader}>
          <button className={style.closeBtn}>
            <XIcon
              className={style.closeIcon}
              onClick={() => setIsOpen(false)}
            />
          </button>
          <span className={style.cartTitle}>Cart</span>
        </div>
        <div className={style.cartContent}>
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <div key={product.id} className={style.cartProduct}>
                <ProductCard product={product} view="cart">
                  <div className={style.cartControls}>
                    <button
                      className={style.cartControlBtn}
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      -
                    </button>
                    <span className={style.cartQuantity}>
                      {product.quantity || 0}
                    </span>
                    <button
                      className={style.cartControlBtn}
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      +
                    </button>
                    <button className={style.removeBtn}>
                      <Trash2
                        className={style.removeIcon}
                        onClick={() => handleRemoveFromCart(product.id)}
                      />
                    </button>
                  </div>
                </ProductCard>
              </div>
            ))
          ) : (
            <p className={style.cartEmpty}>Your cart is empty.</p>
          )}
        </div>
        <div className={style.cartFooter}>
          {cartProducts.length > 0 && (
            <>
              <p className={style.cartTotal}>Total: {getCartTotal() || 0} €</p>
              <div className={style.cartButtonWrapper}>
                <button
                  className={style.clearCartBtn}
                  onClick={handleClearCart}
                >
                  Clear cart
                </button>
                <button className={style.checkoutBtn}>Buy now</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

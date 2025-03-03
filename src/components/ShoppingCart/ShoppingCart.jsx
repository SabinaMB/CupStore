import React, { useState } from "react";
import { ShoppingCartIcon, XIcon } from "lucide-react";
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
  } = useStore();

  const cartProducts = productsInStore.filter((product) => product.inCart);

  const handleIncreaseQuantity = (productId) => {
    updateQuantity(productId, 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const product = productsInStore.find((product) => product.id === productId);
    if (product.quantity > 1) {
      updateQuantity(productId, -1);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <>
      <button className={style.shoppingCartBtn} onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon className={style.cartIcon} />
        <span className={style.cartCount}>{getCartCount()}</span>
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
                <ProductCard product={product} view="cart" />
                <div className={style.cartControls}>
                  <button
                    className={style.cartControlBtn}
                    onClick={() => handleDecreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className={style.cartQuantity}>{product.quantity}</span>
                  <button
                    className={style.cartControlBtn}
                    onClick={() => handleIncreaseQuantity(product.id)}
                  >
                    +
                  </button>
                  <button
                    className={style.removeBtn}
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className={style.cartEmpty}>Your cart is empty.</p>
          )}
        </div>
        <div className={style.cartFooter}>
          {cartProducts.length > 0 && (
            <p className={style.cartTotal}>
              Total:{" "}
              {cartProducts.reduce(
                (total, p) => total + p.price * p.quantity,
                0
              )}{" "}
              €
            </p>
          )}
          {cartProducts.length > 0 && (
            <button
              className={style.checkoutBtn}
              disabled={cartProducts.length === 0}
            >
              Buy now
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

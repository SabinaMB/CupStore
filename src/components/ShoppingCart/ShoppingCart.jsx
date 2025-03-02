import React, { useState } from "react";
import { ShoppingCartIcon, XIcon } from "lucide-react";
import style from "./ShoppingCart.module.css";
import { useStore } from "../../context/StoreContext";
import ProductCard from "../ProductCard/ProductCard";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { productsInStore, getCartCount, addToCart } = useStore();

  const cartProducts = productsInStore.filter((product) => product.inCart);

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
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className={style.cartEmpty}>Your cart is empty.</p>
          )}
        </div>
        <div className={style.cartFooter}>
          <p className={style.cartTotal}>
            Total: {cartProducts.reduce((total, p) => total + p.price, 0)} €
          </p>
          <button
            className={style.checkoutBtn}
            disabled={cartProducts.length === 0}
          >
            Buy now
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

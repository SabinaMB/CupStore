import React, { useState } from "react";
import { ShoppingCartIcon, XIcon } from "lucide-react";
import style from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className={style.shoppingCartBtn} onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon className={style.cartIcon} />
        <span className={style.cartCount}>3</span>
        {/* {cartItems > 0 && (
            <span className={style.cartCount}>{cartItems}</span>
          )} */}
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
          {/* Placeholder for cart items */}
          {/* {cartItems > 0 ? (
          <p className={style.cartTotal}>Total: €{totalPrice}</p>
        ) : (
          <p className={style.cartEmpty}>Your cart is empty.</p>
        )} */}
          <p className={style.cartTotal}>Total: 100 €</p>
          <button className={style.checkoutBtn}>Buy now</button>
          <p className={style.cartEmpty}>Your cart is empty.</p>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

import React from "react";
import style from "./CardButtons.module.css";
import { useStore } from "../../context/StoreContext";

const CardButtons = ({ product }) => {
  const { addToCart } = useStore();
  return (
    <div className={style.cardBtns}>
      <button
        type="button"
        className={style.addBtn}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CardButtons;

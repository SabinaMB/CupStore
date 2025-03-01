import React from "react";
import style from "./CardButtons.module.css";

const CardButtons = () => {
  return (
    <div className={style.cardBtns}>
      <button className={style.addBtn}>Add to Cart</button>
    </div>
  );
};

export default CardButtons;

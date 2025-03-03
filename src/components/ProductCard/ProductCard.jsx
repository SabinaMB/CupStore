import React from "react";
import style from "./ProductCard.module.css";
import CardButtons from "../CardButtons/CardButtons";

const ProductCard = ({ product, view, children }) => {
  const { image, name, price } = product;
  return (
    <div className={style.productCard}>
      {view === "catalog" && !product.inCart && (
        <div className={style.cardBtns}>
          <CardButtons product={product} />
        </div>
      )}

      {view === "catalog" && product.inCart && (
        <p className={style.inCartText}>In Cart</p>
      )}

      <div className={style.product}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price} €</p>
        {view === "cart" && children}
      </div>
    </div>
  );
};

export default ProductCard;

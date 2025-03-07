import React from "react";
import style from "./ProductCard.module.css";
import CardButtons from "../CardButtons/CardButtons";

const ProductCard = ({ product, view, children }) => {
  const { image, name, price } = product;
  return (
    <div className={style.productCard}>
      <div className={style.cardHeader}>
        {view === "catalog" && !product.inCart && (
          <div className={style.cardBtns}>
            <CardButtons product={product} />
          </div>
        )}
        {view === "catalog" && product.inCart && (
          <p className={style.inCartText}>In Cart</p>
        )}
      </div>

      <div className={style.imageWrapper}>
        <img src={image} alt={name} />
      </div>

      <div className={style.cardFooter}>
        <h3>{name}</h3>
        <p>{price} €</p>
      </div>

      {view === "cart" && children}
    </div>
  );
};

export default ProductCard;

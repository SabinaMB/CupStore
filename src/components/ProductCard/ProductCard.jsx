import React from "react";
import style from "./ProductCard.module.css";
import CardButtons from "../CardButtons/CardButtons";

const ProductCard = ({ product }) => {
  const { image, name, price } = product;
  return (
    <div className={style.productCard}>
      <div className={style.cardBtns}>
        <CardButtons />
      </div>
      <div className={style.product}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price} €</p>
      </div>
    </div>
  );
};

export default ProductCard;

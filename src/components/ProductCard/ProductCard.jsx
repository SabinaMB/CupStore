import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { image, name, price } = product;
  return (
    <div className={style.productCard}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price} €</p>
    </div>
  );
};

export default ProductCard;

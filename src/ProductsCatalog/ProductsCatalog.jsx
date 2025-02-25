import React from "react";
import style from "./ProductsCatalog.module.css";
import products from "../assets/data/data";

function ProductsCatalog() {
  return (
    <div className={style.container}>
      {products.map((product) => (
        <div className={style.product} key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsCatalog;

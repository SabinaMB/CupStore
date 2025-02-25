import React from "react";
import style from "./ProductsCatalog.module.css";
import products from "../../assets/data/data";
import ProductCard from "../ProductCard/ProductCard";

function ProductsCatalog() {
  return (
    <div className={style.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsCatalog;

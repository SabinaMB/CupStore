import React, { useEffect } from "react";
import style from "./ProductsCatalog.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useStore } from "../../context/StoreContext";

function ProductsCatalog() {
  const { items, loadItems } = useStore();
  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className={style.container}>
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsCatalog;

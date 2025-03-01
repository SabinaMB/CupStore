import React, { useEffect } from "react";
import style from "./ProductsCatalog.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useStore } from "../../context/StoreContext";

function ProductsCatalog() {
  const { productsInStore, loadProducts } = useStore();

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    console.log(productsInStore);
  }, [productsInStore]);

  return (
    <div className={style.container}>
      {productsInStore.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsCatalog;

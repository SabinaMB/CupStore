// import React, { useEffect } from "react";
// import style from "./ProductsCatalog.module.css";
// import ProductCard from "../ProductCard/ProductCard";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
// import { useStore } from "../../context/StoreContext";

// function ProductsCatalog() {
//   const { productsInStore, loadProducts } = useStore();

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     console.log(productsInStore);
//   }, [productsInStore]);

//   return (
//     <div className={style.container}>
//       <ShoppingCart />
//       {productsInStore.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductsCatalog;

import React, { useEffect } from "react";
import style from "./ProductsCatalog.module.css";
import ProductCard from "../ProductCard/ProductCard";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useStore } from "../../context/StoreContext";

function ProductsCatalog() {
  const { productsInStore } = useStore();

  useEffect(() => {
    console.log(productsInStore); // Check if products load correctly
  }, [productsInStore]);

  return (
    <div className={style.container}>
      <ShoppingCart />
      {productsInStore.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsCatalog;

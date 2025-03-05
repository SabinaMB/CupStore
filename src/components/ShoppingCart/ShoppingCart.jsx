// import React, { useState } from "react";
// import { ShoppingCartIcon, XIcon, Trash2 } from "lucide-react";
// import style from "./ShoppingCart.module.css";
// import { useStore } from "../../context/StoreContext";
// import ProductCard from "../ProductCard/ProductCard";

// const ShoppingCart = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const {
//     productsInStore,
//     getCartCount,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     getCartTotal,
//     setLocalStorage,
//   } = useStore();

//   const cartProducts = productsInStore.filter((product) => product.inCart);

//   const handleIncreaseQuantity = (productId) => {
//     updateQuantity(productId, 1);
//   };

//   const handleDecreaseQuantity = (productId) => {
//     const product = productsInStore.find((product) => product.id === productId);
//     if (product.quantity > 1) {
//       updateQuantity(productId, -1);
//     }
//   };

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(productId);
//   };

//   return (
//     <>
//       <button className={style.shoppingCartBtn} onClick={() => setIsOpen(true)}>
//         <ShoppingCartIcon className={style.cartIcon} />
//         <span className={style.cartCount}>{getCartCount()}</span>
//       </button>
//       <div
//         className={`${style.cartWrapper} ${
//           isOpen ? style.cartOpen : style.cartClosed
//         }`}
//       >
//         <div className={style.cartHeader}>
//           <button className={style.closeBtn}>
//             <XIcon
//               className={style.closeIcon}
//               onClick={() => setIsOpen(false)}
//             />
//           </button>
//           <span className={style.cartTitle}>Cart</span>
//         </div>
//         <div className={style.cartContent}>
//           {cartProducts.length > 0 ? (
//             cartProducts.map((product) => (
//               <div key={product.id} className={style.cartProduct}>
//                 <ProductCard product={product} view="cart">
//                   <div className={style.cartControls}>
//                     <button
//                       className={style.cartControlBtn}
//                       onClick={() => handleDecreaseQuantity(product.id)}
//                     >
//                       -
//                     </button>
//                     <span className={style.cartQuantity}>
//                       {product.quantity}
//                     </span>
//                     <button
//                       className={style.cartControlBtn}
//                       onClick={() => handleIncreaseQuantity(product.id)}
//                     >
//                       +
//                     </button>
//                     <button className={style.removeBtn}>
//                       <Trash2
//                         className={style.removeIcon}
//                         onClick={() => handleRemoveFromCart(product.id)}
//                       />
//                     </button>
//                   </div>
//                 </ProductCard>
//               </div>
//             ))
//           ) : (
//             <p className={style.cartEmpty}>Your cart is empty.</p>
//           )}
//         </div>
//         <div className={style.cartFooter}>
//           {cartProducts.length > 0 && (
//             <p className={style.cartTotal}>
//               Total:{" "}
//               {cartProducts
//                 .reduce((total, p) => total + p.price * p.quantity, 0)
//                 .toFixed(2)}{" "}
//               €
//             </p>
//           )}
//           {cartProducts.length > 0 && (
//             <button
//               className={style.checkoutBtn}
//               disabled={cartProducts.length === 0}
//             >
//               Buy now
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShoppingCart;

import React, { useState, useEffect } from "react";
import { ShoppingCartIcon, XIcon, Trash2 } from "lucide-react";
import style from "./ShoppingCart.module.css";
import { useStore } from "../../context/StoreContext";
import ProductCard from "../ProductCard/ProductCard";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    productsInStore,
    getCartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    setCartProducts,
  } = useStore();

  // Load cart from local storage on component mount
  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart && typeof setCartProducts === "function") {
        setCartProducts(JSON.parse(storedCart));
      }
    };
    loadCartFromLocalStorage();
  }, [setCartProducts]);

  // Sync cart with local storage whenever products change
  // useEffect(() => {
  //   localStorage.setItem("shoppingCart", JSON.stringify(productsInStore));
  // }, [productsInStore]);

  const cartProducts = productsInStore.filter((product) => product.inCart);

  const handleIncreaseQuantity = (productId) => {
    addToCart(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    updateQuantity(productId, -1);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <button className={style.shoppingCartBtn} onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon className={style.cartIcon} />
        <span className={style.cartCount}>{getCartCount()}</span>
      </button>
      <div
        className={`${style.cartWrapper} ${
          isOpen ? style.cartOpen : style.cartClosed
        }`}
      >
        <div className={style.cartHeader}>
          <button className={style.closeBtn}>
            <XIcon
              className={style.closeIcon}
              onClick={() => setIsOpen(false)}
            />
          </button>
          <span className={style.cartTitle}>Cart</span>
        </div>
        <div className={style.cartContent}>
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <div key={product.id} className={style.cartProduct}>
                <ProductCard product={product} view="cart">
                  <div className={style.cartControls}>
                    <button
                      className={style.cartControlBtn}
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      -
                    </button>
                    <span className={style.cartQuantity}>
                      {product.quantity}
                    </span>
                    <button
                      className={style.cartControlBtn}
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      +
                    </button>
                    <button className={style.removeBtn}>
                      <Trash2
                        className={style.removeIcon}
                        onClick={() => handleRemoveFromCart(product.id)}
                      />
                    </button>
                  </div>
                </ProductCard>
              </div>
            ))
          ) : (
            <p className={style.cartEmpty}>Your cart is empty.</p>
          )}
        </div>
        <div className={style.cartFooter}>
          {cartProducts.length > 0 && (
            <>
              <p className={style.cartTotal}>Total: {getCartTotal()} €</p>
              <button className={style.clearCartBtn} onClick={handleClearCart}>
                Clear cart
              </button>
              <button className={style.checkoutBtn}>Buy now</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

// Let me know if you want me to add more features! 🚀

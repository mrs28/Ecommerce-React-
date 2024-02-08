import React from "react";
import styles from "./CartNumberProducts.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartNumberProducts = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.cartNumberProducts}>
      {cart.map((elemento) => {
        return (
          <div className={styles.cardProducts}>
            <div className={styles.cardProductsLeft}>
              <div>
                <img src={elemento.img} alt="foto" width={120} height={120} />
              </div>
              <div>
                <h2>{elemento.title}</h2>
                <h2>{elemento.brand}</h2>
              </div>
            </div>
            <div className={styles.cardProductsRight}>
              <h2>{elemento.price}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartNumberProducts;

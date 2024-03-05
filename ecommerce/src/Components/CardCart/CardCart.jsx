import styles from "./CardCart.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CardCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.cartNumberProducts}>
    {cart.map((elemento) => {
      return (
        <div className={styles.cardProducts} key={elemento.id}>
          <div className={styles.cardProductsLeft}>
            <div>
              <img src={elemento.img} alt="foto" width={120} height={120} />
            </div>
            <div>
              <h2>Producto:{elemento.title}</h2>
              <h2>Marca:{elemento.brand}</h2>
            </div>
          </div>
          <div className={styles.cardProductsRight}>
            <h2>Cantidad:{elemento.quantity}</h2>
            <h2>Precio:{elemento.price}</h2>
          </div>
        </div>
      );
    })}

    {/* <button onClick={cleanCart} className={styles.cleanButton}>
      LIMPIAR CARRITO
    </button> */}
  </div>
  )
  

};

export default CardCart;

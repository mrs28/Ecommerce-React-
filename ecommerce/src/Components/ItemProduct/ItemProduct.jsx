import styles from "./ItemProduct.module.css";

const ItemProduct = ({ items }) => {
  return (
    <div className={styles.itemProduct}>
      {items.map((item) => {
        return (
          <div>
            <div className={styles.cardProduct}>
              <figure>
                <img className={styles.img} src={item.img} alt="" />
              </figure>

              <div className={styles.mg}>
                <h3> {item.title} </h3>
              </div>

              <div className={styles.mg}>
                <span> {item.price} </span>
              </div>
              <div className={styles.frame} class=" marginTop flex-row amount">
                <span className={styles.span}>-</span>
                <span className={styles.span}>CANT.</span>
                <span className={styles.span}>+</span>
              </div>
              <div class="marginTop addProduct">
                <button>Agregar</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemProduct;

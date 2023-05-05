import styles from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <figure className={styles.figure}>
        <img
          src={item.img}
          alt="foto de producto para gato"
          width={205}
          height={205}
        />
      </figure>
      <div className={styles.itemDescription}>
        <h2>{item.title}</h2>
        <h4>{item.description}</h4>
        <h2>S/.{item.price}</h2>
        <div className={styles.productDetail}>
          <button className={styles.buttonDetail}>Ver Producto</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
//Padre-hijo
//ItemList-Item

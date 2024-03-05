// NO SE ESTA USANDO 
import styles from "./Cart.module.css";
import Typography from "@mui/material/Typography";

import { useParams } from "react-router-dom";
import { products } from "../../productsMock";

const Cart = () => {
  const { id } = useParams();
  console.log("soy id", id); //id llega como un string

  //al array products
  const idProductSelected = products.find(
    (product) => product.id === Number(id)
  );
  //usae comprador estricto
  //product.id llega como number por eso convierto el string id en Number
  return (
    <div className={styles.cart}>
      cart
      <div className={styles.orderSummary}>
        <Typography mt={1} mb={1} fontWeight="600" variant="h6" component="h1">
          Order summary
        </Typography>
      </div>
      {/* <div className={styles.weight}>
        <Typography variant="body1" component="h1">
          Weight
        </Typography>

        <Typography variant="body1" component="h1">
          {idProductSelected.weight} {`Kg.`}
        </Typography>
      </div>
      <div className={styles.type}>
        <Typography variant="body1" component="h1">
          Category
        </Typography>

        <Typography variant="body1" component="h1">
          {idProductSelected.type}
        </Typography>
      </div>
      <div className={styles.delivery}>
        <Typography variant="body1" component="h1">
          Delivery
        </Typography>

        <Typography variant="body1" component="h1">
          {`S/.`} {idProductSelected.delivery}
        </Typography>
      </div>
      <div className={styles.confirmationOrder}>
        <div className={styles.img}>
          <img src={idProductSelected.img} alt="" width={60} height={60} />
        </div>
        <div className={styles.brand}>
          <Typography variant="body1" component="h1">
            {idProductSelected.brand}
          </Typography>
        </div>
        <div className={styles.price}>
          <Typography variant="body1" component="h1">
            {idProductSelected.price}
          </Typography>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;

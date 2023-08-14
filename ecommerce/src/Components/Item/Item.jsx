// import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
// import Typography from "@mui/material/Typography";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

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

      {/* <Typography variant="h6" component="h1">
        {item.brand}
        </Typography>
      <Typography variant="h6" component="h1">
        {item.title}
        </Typography> */}
         <h2>{item.brand}</h2> 
        <h2>{item.title}</h2> 
       <p className={styles.description}>{item.description}</p>

{/*        
        <Typography variant="body1" component="h1">
        {item.description}
        </Typography>  */}

   {/* <Typography mt={1} variant="h6" component="h1">
  {`S/ ${item.price}`}
        </Typography> */}

        <h2>{`S/ ${item.price}`}</h2> 


     

        {/* <Link to="/itemDetail" element={ItemDetailContainer}> */}
        {/* RUTA DINÁMICA */}
        <Link to={`/itemDetail/${item.id}`}>
          <div className={styles.productDetail}>
            <button className={styles.buttonDetail}>Ver Producto</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
//Padre-hijo
//ItemList-Item
//El botón Ver producto me lleva al componente ItemDetailContainer

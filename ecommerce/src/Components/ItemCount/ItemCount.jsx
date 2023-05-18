import styles from "./ItemCount.module.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.itemCount}>
      <div className={styles.countItemBox}>
        <div className={styles.countItem}>
          <div>
            <button onClick={sumar}>
              <AddIcon className={styles.icon} fontSize="medium" />{" "}
            </button>
          </div>
          <div className={styles.countItem}>

          <Typography variant="body1" component="h1">
          <span> {count} 1</span> 
            </Typography>
        
          </div>
          <div className={styles.countItem}>
            <button onClick={restar}>
              {" "}
              <RemoveIcon className={styles.icon} fontSize="medium" />{" "}
            </button>
          </div>
        </div>

      

        {/* </div> */}
      </div>

        {/* <div className={styles.countButton}>
        <button className={styles.addCartButton} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>

      <div>
        <button className={styles.buyButton} onClick={() => onAdd(count)}>
          Ir a pagar
        </button>
      </div> */}

  
    </div>
  );
};

// const counterState = useState() // me devuelve un array
// //useState inicializa el valor de la var en la [0]
// console.log(counterState[0])
// console.log(counterState[1])

//     const [ contador, setContador ] = useState(0);

//     const sumar = ()=> {
//         setContador(contador + 1)
//     }

//   return (
//     <div>

//         <h1>Elige la cantidad</h1>
//         <button onClick={sumar}>CANTIDAD</button>
//         <h2>{contador}</h2>

//     </div>
//   )

export default ItemCount;

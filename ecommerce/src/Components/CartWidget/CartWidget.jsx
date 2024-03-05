import styles from "./CartWidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "../Atoms/Button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react"; // para consumir el contexto
import { CartContext } from "../../Context/CartContext";

import Badge from "@mui/material/Badge";

const CartWidget = ({ title }) => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <Button className={styles.button}>
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon className={styles.icon} fontSize="large" />
        </Badge>
        Cart
      </Button>
    </Link>
  );
};

export default CartWidget;

// // import DeleteIcon from '@mui/icons-material/Delete';
// // import SendIcon from '@mui/icons-material/Send';

// <div>
// <Stack direction="row" spacing={2}>
//   {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
//   Delete
// </Button> */}
//   <Button
//     sx={{
//       backgroundColor: "white",
//       color: "#308E95"
//     }}
//     variant="contained"
//     startIcon={<ShoppingCartIcon />}
//   >
//     Carrito
//   </Button>
// </Stack>
// </div>

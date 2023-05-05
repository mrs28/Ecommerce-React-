import styles from "./CartWidget.module.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "../Atoms/Button/Button";
import { Link } from "react-router-dom";

const CartWidget = ({ title }) => {
  return (
    <Link to="/cart">
      <Button>
        <AddShoppingCartIcon className={styles.icon} fontSize="large" />
        {title}
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

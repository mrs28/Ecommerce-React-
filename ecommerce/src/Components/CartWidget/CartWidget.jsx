import styles from './CartWidget.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div className={styles.cartWidget}>
        <ShoppingCartIcon/>
     </div>
  )
}

export default CartWidget

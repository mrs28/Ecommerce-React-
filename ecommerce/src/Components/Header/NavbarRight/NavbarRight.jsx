import styles from './NavbarRight.module.css';
import CartWidget from '../../CartWidget/CartWidget';
import Login from '../../Login/Login';

const NavbarRight = () => {
  return (
    <div className={styles.navbarRight}>
        <Login/>
        <CartWidget/>
    </div>
  )
}

export default NavbarRight;
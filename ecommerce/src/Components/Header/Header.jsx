import styles from './Header.module.css';

import NavbarLeft from '././NavbarLeft/NavbarLeft';
import Login from '../Login/Login';
import CartWidget from "../CartWidget/CartWidget";

const Header = () => {
  return (
    <div className={styles.header}>
        <NavbarLeft />
        <Login />
        <CartWidget />

    </div>
  )
}

export default Header;
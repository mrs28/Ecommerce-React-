import styles from './NavbarRight.module.css';
import CartWidget from '../../CartWidget/CartWidget';
import LoginWidget from '../../LoginWidget/LoginWidget';

const NavbarRight = () => {
  return (
    <div className={styles.navbarRight}>
        <LoginWidget title={"Login"} />
        <CartWidget title={"Cart"}/>
    </div>
  )
}

export default NavbarRight;
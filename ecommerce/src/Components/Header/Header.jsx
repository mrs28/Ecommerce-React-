import styles from './Header.module.css';

import NavbarLeft from './NavbarLeft/NavbarLeft';
import Navbar from './Nabvar/Nabvar';


// import Login from '../Login/Login';
// import CartWidget from "../CartWidget/CartWidget";
import NavbarRight from './NavbarRight/NavbarRight';

const Header = () => {
  return (
    <div className={styles.header}>
        <NavbarLeft />
        <Navbar />
        <NavbarRight />
    </div>
    
  )
}

export default Header;
import styles from "./NavbarRight.module.css";
import CartWidget from "../../CartWidget/CartWidget";
import LoginWidget from "../../LoginWidget/LoginWidget";

import Formulario from "../../Formulario/Formulario";
import { Link } from "react-router-dom";

const NavbarRight = () => {
  return (
    <div className={styles.navbarRight}>
      <LoginWidget title={"Login"} />
      <CartWidget title={"Cart"} />

      <Link to="/form" className={styles.categories}>
        <Formulario />
      </Link>
    </div>
  );
};

export default NavbarRight;

import styles from "./Navbar.module.css";
// import { products } from "../../../productsMock";
import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarList}>
        <Link to="/" className={styles.categories}>
          Marcas
        </Link>
        <Link to="/category/alimento-seco" className={styles.categories}>
          Alimento seco
        </Link>
        <Link to="/category/alimento-humedo" className={styles.categories}>
          Alimento húmedo
        </Link>
        <Link to="/category/salud-bienestar" className={styles.categories}>
          Salud y Bienestar
        </Link>
        <Link to="/category/accesorios" className={styles.categories}>
          Accesorios y más
        </Link>
      </ul>
    </div>
  );
};

export default Nabvar;

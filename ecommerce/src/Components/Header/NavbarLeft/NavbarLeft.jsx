import styles from "./NavbarLeft.module.css";

import Categories from "../../Categories/Categories";
import Logo from "../../Login/Login";
import SearchBox from "../../SearchBox/SearchBox";

const NavbarLeft = () => {
  return (
    <div className={styles.navbarLeft}>
      <Categories />
      <Logo />
      <SearchBox />
    </div>
  );
};

export default NavbarLeft;

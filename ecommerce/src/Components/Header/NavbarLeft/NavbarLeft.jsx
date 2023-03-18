import styles from "./NavbarLeft.module.css";

import Categories from "../../Categories/Categories";
import Logo from '../../Atoms/Logo/Logo';
// import SearchBox from "../../SearchBox/SearchBox";

const NavbarLeft = () => {
  return (
    <div className={styles.navbarLeft}>
      <Categories />
      <Logo tittle={"Katz"} />
      {/* <SearchBox /> */}
    </div>
  );
};

export default NavbarLeft;

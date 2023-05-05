import styles from "./NavbarLeft.module.css";

import Categories from "../../Categories/Categories";
import Logo from '../../Atoms/Logo/Logo';
// import SearchBox from "../../SearchBox/SearchBox";
import { Link } from 'react-router-dom';

const NavbarLeft = () => {
  return (
    <div className={styles.navbarLeft}>
      <Categories />
      <Link to="/">
        <Logo title={"Katz"} />
      </Link>
      {/* <SearchBox /> */}
    </div>
  );
};

export default NavbarLeft;

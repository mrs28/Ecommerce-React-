import styles from './Navbar.module.css';

const Nabvar = () => {
  return (
    <div className={styles.navbar} >
        <ul className={styles.navbarList}>
            <li><a href="./">Home</a></li>
            <li><a href=" ">Shop</a></li>
            <li><a href=" ">Contact us</a></li>
        </ul>
    </div>
  )
}

export default Nabvar;
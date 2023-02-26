import styles from './Logo.module.css';

const Logo = ( {tittle} ) => {
  return (
    <div className={styles.logo}>
        <img className={styles.imageLogo} src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1677360111/images_sdggbm.jpg" alt="" />
        <h1 className={styles.tittleLogo}> {tittle} </h1>
    </div>
  )
}

export default Logo;
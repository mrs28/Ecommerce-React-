import styles  from './Login.module.css';
import NavbarLeft from '../Header/NavbarLeft/NavbarLeft';

const Login = () => {
  return (

    <div className={styles.login}>
        <NavbarLeft/>
        <div className={styles.services}>
            <h3>ASESORÍA TELEFÓNICA</h3>
            <h3>COMPRA SEGURA</h3>
        </div>
    </div>

  )
}

export default Login

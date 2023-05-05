import styles  from './Button.module.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type}  className={styles.button}>
    {props.children}
  </button>
    // <div>
    //     <button className={styles.button}>BUSCAR</button>
    // </div>
  )
}

export default Button;
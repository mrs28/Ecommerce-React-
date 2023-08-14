import styles  from './Input.module.css';

const Input = () => {
  return (
    <div >
        <input className={styles.input} type="text" name="search" placeholder="Buscar productos" id="" />
    </div>
  )
}

export default Input
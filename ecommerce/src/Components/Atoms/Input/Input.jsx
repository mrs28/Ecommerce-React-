import styles  from './Input.module.css';

const Input = () => {
  return (
    <div >
        <input className={styles.input} type="text" name="search" placeholder="Productos" id="" />
    </div>
  )
}

export default Input
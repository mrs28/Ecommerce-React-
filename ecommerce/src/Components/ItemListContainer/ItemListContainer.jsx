import styles from './ItemListContainer.module.css';

const ItemListContainer = ( {tittle} ) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.tittleContainer}> {tittle} </h2>
    </div>
  )
}

export default ItemListContainer;
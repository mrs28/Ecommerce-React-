import { useState, useEffect } from 'react'; 
import styles from './ItemListContainer.module.css';
// import ProductCard from '../ProductCard/ProductCard';
// import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = ( {tittle} ) => {

  const [ name, setName ] = useState("pepito");

  const cambiarNombre = ()=>{
    setName("maria")
  }

  useEffect(()=>{} , [])

  return (
    <div className={styles.container}>
        {/* <h2 className={styles.tittleContainer}> {tittle} </h2>
        <ProductCard />
        <ItemCount /> */}

        <h3>Hola {name}</h3>
        <button onClick={cambiarNombre}>CAMBIAR a maria</button>
      
    </div>  
  )
}

export default ItemListContainer;
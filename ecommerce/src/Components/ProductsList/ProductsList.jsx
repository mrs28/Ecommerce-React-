import styles from './ProductsList.module.css';
import { useState, useEffect } from 'react';
import { products } from '../../productsMock';
import ItemProduct from '../ItemProduct/ItemProduct';

// console.log(products);

const ProductsList = () => {
    
    const [items , setItems ] = useState([]);
    
    useEffect( ()=>{
        const productList = new Promise((resolve, reject)=>{
            resolve( products )
        });

        productList 
       .then( (response)=>{ setItems(response) })
       .catch( (error)=>{ console.log(error) })
    },[])
    
    console.log(items)

  return (
    <div className={styles.productsList}>
        <ItemProduct items = { items }/>
    </div>
  )
}

export default ProductsList
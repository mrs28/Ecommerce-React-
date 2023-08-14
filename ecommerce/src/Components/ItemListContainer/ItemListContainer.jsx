import { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";
// import styles from './ItemListContainer.module.css';
import { products } from "../../productsMock";
import ItemList from "../Itemlist/ItemList";
// import ProductCard from '../ProductCard/ProductCard';
// import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
  const { categoryName } = useParams();

  //guardar el arreglo de productos en la variable de estado items
  const [items, setItems] = useState([]);

  const filteringProduct = products.filter( (element)=> element.category === categoryName);

  console.log("aquiiiaquiaquia!!!!****", filteringProduct )

  const ejemplo = [1,2,3, 1 ]
  const filtrados = ejemplo.filter ((elemento) => elemento === 1)
  console.log("soy un ejemplo*****", filtrados)

 
 
  //la promesa resuelve el arreglo de productos
  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? filteringProduct : products);
      // reject ( "No tienes autotización a la lista de productos")
    });
    productList
      .then((res) => {
        setItems(res);
      })
      .catch(() => {});
  }, [categoryName]);

  return (
    <div className={styles.itemListContainer}>
      <ItemList items={items} />
    </div>

    // <h1>Primero el [] devuelve 0 porque está vacío. Después de leer todas la líneas, recién entra al useEffect, y ahí el [] trae los 8 elementos</h1>
  );
};
export default ItemListContainer;

// ****** 1.  PROMESA DENTRO DEL USEEFFECT   *****
// const ItemListContainer = ( {tittle} ) => {
//   const [ name, setName ] = useState("pepito");
//   const cambiarNombre = ()=>{
//     setName("maria")
//   }

//   //guardar en el estado userName la resp de la promesa. Es decir, guardar en el Front la respueta que viene del backend
//  const [ userName, setUserName ] = useState("");

//   useEffect(()=>{} , [])
//   // [] ARREGLO DE DEPENDENCIAS A LA ESPERA DE LA ESCUCHA DE LA VARIABLE

//   console.log("hola")
//  const productList = new Promise ((resolve, reject)=>{
//   resolve("Pepito")
//   // reject("Salió todo mal. La solictud no pudo ser completada")
//  })

//  //La promesa va dentro del useEffect para que se renderice 1 sola vez
//  useEffect(()=>{
//  productList
//  //  .then( (res)=>{ console.log("Ingresé al then" + res)} )
// .then((res)=>{ setUserName(res) } )
// .catch((error)=>{console.log("Ingrsé al catch" + error)} )
//  }, [] );

//  console.log("soy userName seteado con lo que devuelve la promesa: ", userName)

//   return (
//     <div className={styles.container}>
//         {/* <h2 className={styles.tittleContainer}> {tittle} </h2>
//         <ProductCard />
//         <ItemCount /> */}

//         <h3>Hola {name}</h3>
//         <button onClick={cambiarNombre}>CAMBIAR a maria</button>

//     </div>
//   )
// }

// export default ItemListContainer;

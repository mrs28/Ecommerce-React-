
import "./ProductCard.module.css"

const ProductCard = ( {title, price=0, isRed} ) => {

const saludar = (nombre)=>{
  console.log("hola" + nombre);
}

  return (
    <div>
        <h1 className={ isRed ? "red" : "blue" }> {title} </h1>
        <h2> {price} </h2>
        <button onClick={saludar}>SALUDOS</button>
    </div>
  )
}

export default ProductCard;

// let persona = {
//     nombre: "pepito",
//     edad: 30
// }

// let { edad, nombre } = persona

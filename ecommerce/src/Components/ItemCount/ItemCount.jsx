import { useState } from 'react'

const ItemCount = () => {

    const counterState = useState() // me devuelve un array
    //useState inicializa el valor de la var en la [0]
    console.log(counterState[0])
    console.log(counterState[1])

//     const [ contador, setContador ] = useState(0);

//     const sumar = ()=> {
//         setContador(contador + 1)
//     }

//   return (
//     <div>
        
//         <h1>Elige la cantidad</h1>
//         <button onClick={sumar}>CANTIDAD</button>
//         <h2>{contador}</h2>

//     </div>
//   )
}

export default ItemCount
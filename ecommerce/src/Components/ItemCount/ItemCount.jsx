import { useState } from 'react'

const ItemCount = ( { stock, initial, onAdd} ) => {

    const[count, setCount]  = useState(initial) 

    const sumar = ()=> {
        setCount(count + 1)
    };

    const restar = ()=> {
        if (count > 1) {
            setCount(count-1)
        }
    };

    return (
        
      <div>
        <button onClick={sumar}> + </button>
        <h1>{count}</h1>
        <button onClick={restar}> - </button>

        <button onClick={ ()=>onAdd(count) }>AGREGAR PRODUCTO AL CARRITO</button>
      </div>
    )
}

    // const counterState = useState() // me devuelve un array
    // //useState inicializa el valor de la var en la [0]
    // console.log(counterState[0])
    // console.log(counterState[1])

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


export default ItemCount
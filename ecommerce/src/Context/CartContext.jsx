import { createContext } from "react";

export const CartContext = createContext(); //nombre del contexto
//  const [cart, setCart] = useState([]);

// let data = { //aquí va todo lo que vaya a querer consumir 
//   cart: cart,
//   setCart: setCart,
//   algo: "",
// };

//envuelve a toda la app (gran círculo)
const CartContextProvider = ({ children }) => {
  return (

    //llamo al contexto (que tengo en la línea 3) como etiqueta html, y a aus método .Provider
    <CartContext.Provider >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

// 1. Crear una carpeta Context
// 2. Crear un componente (CartContextProvider) que sea el proveedor delcontexto.
// 3. Poner a disposición el contexto
// 4. Consumir el contexto

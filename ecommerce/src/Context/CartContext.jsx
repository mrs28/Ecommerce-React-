import { createContext, useState } from "react";

export const CartContext = createContext(); //nombre del contexto
//  const [cart, setCart] = useState([]);

// let data = { //aquí va todo lo que vaya a querer consumir
//   cart: cart,
//   setCart: setCart,
//   algo: "",
// };

//envuelve a toda la app (gran círculo)
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([{}, {}]);

  // aqúí va todo lo que va a consumir
  let data = {
    cart: cart,
    setCart: setCart,
  };
  // AGREGAR
  // ELIMINAR
  // CONTAR
  // TOTAL DEL PRECIO DE CARRITO

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

// 1. Crear una carpeta Context
// 2. Crear un componente (CartContextProvider) que sea el proveedor delcontexto.
// 3. Poner a disposición el contexto
// 4. Consumir el contexto

// ¿para qué usar context?
// COMPONENTES HERMANOS:
// En el navbar quiero ver  el número de items
// En el carrito quiero ver el número de items
// En el itemDeatil quiero agregar productos al carrito

// El carrito es un estado que va almacenando los productos que voy selecionando. Esta información la voy a consumir en el carrito y en el navbar y dentro de ItemDetail voy a consumir el carrito para ver los productso que estoy agregando

// para tener acceso del cartContextProvider le paso todo lo quer quiero mandarle al conetxo que proveee la informacion, para ello le pongo el atributo value

import { createContext, useState } from "react";
//nombre del contexto
export const CartContext = createContext();

//componente wrapper en app (gran círculo)
const CartContextProvider = ({ children }) => {
  // Dentro del conexto voy a tener f(x) que quiero poder a disposición de
  // AGREGAR
  // ELIMINAR
  // CONTAR
  // TOTAL DEL PRECIO DE CARRITO
  const [cart, setCart] = useState([]);



  // FUNCIÓN PARA LIMPIAR EL CARRITO
  const cleanCart = () => {
    setCart([]);
  };
  
  // FUNCIÓN PARA AGREGAR AL CARRITO
  const agregarAlCarrito = (producto) => {
    let existId = isInCart(producto.id);

    if (existId) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + producto.quantity,
          };
        } else {
          return elemento;
        }
      });
    } else {
      // C/vez que se ejecuta recibe un producto y agrega al carrito
      setCart([...cart, producto]);
    }
  };

  // FUNCIÓN PARA ABER SI UN PRODUCTO YA EXISTE EN EL CARRITO. some devuelve un booleano
  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  // aqúí va todo lo que va a consumir
  let data = {
    cart: cart,
    agregarAlCarrito: agregarAlCarrito,
    cleanCart: cleanCart,
  };

  return (
    // son los valores quw quiero proveer a los children
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  );
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

#### ItemDetailContainer renderiza:
1. Foto
2. Descripción del producto
3. Renderiza a ItemCount (contador + -)

#### ItemCount:
recibe la función onAdd() de su padre ItemDetailContainer, con la que puedo agregar al carrito.

****************************
# CONTEXTO
## Consumo de CartContext
let data = {
    cart: cart,
    setCart: setCart,
    agregarAlCarrito: agregarAlCarrito,
  }

#### cart es un array de objetos
* Se consume en CartWidget, aquí pinto cart.length en el Badge
* Se consume en CartNumberProduct(Cart), resumen de la vista Carrito.

#### función agregarAlCarrito() 
* Se consume en ItemDetailContainer



************************************
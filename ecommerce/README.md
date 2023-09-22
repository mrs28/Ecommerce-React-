* ItemDetailContainer renderiza:
1. Foto
2. Descripción del producto
3. Renderiza a ItemCount (contador + -)

* ItemCount recibe la función onAdd() ,que agrega al carrito, de su padre ItemDetailContainer.

****************************
Consumo de CartContext
let data = {
    cart: cart,
    setCart: setCart,
    agregarAlCarrito: agregarAlCarrito,
  }


1. cart es un array de objetos
- Se consume en CartWidget, aquí pinto cart.length en el Badge
- Se consume en CartNumberProduct(Cart), resumen de la vista Carrito.

2. función agregarAlCarrito() 
- Se consume en ItemDetailContainer



************************************
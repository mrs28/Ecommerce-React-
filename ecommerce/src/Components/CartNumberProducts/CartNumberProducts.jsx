import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartNumberProducts = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div>
            <h2>{elemento.title}</h2>
            <h3>{elemento.price}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CartNumberProducts;

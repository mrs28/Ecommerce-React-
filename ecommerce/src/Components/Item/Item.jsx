import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="" />
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <h3>{item.description}</h3>
    </div>
  );
};

export default Item;
//Padre-hijo
//ItemList-Item

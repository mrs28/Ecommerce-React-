import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return items.map((item) => {
    return  <Item key={item.id} item={item} />;
  });
};

export default ItemList;

//Padre - hijo
//ItemListContainer - ItemList
//ItemList - Item(recibe el elemento de map)

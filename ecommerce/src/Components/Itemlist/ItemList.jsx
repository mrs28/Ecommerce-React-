import styles from "./ItemList.module.css";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return items.map((item) => {
    return (
      <div >
        <Item key={item.id} item={item} />
      </div>
    );
  });
};

export default ItemList;

//Padre - hijo
//ItemListContainer - ItemList
//ItemList - Item(recibe el elemento de map)

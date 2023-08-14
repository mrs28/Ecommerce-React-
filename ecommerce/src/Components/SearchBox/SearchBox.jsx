import styles from "./SearchBox.module.css";
import Button from "../Atoms/Button/Button";
import Input from "../Atoms/Input/Input";

const SearchBox = () => {
  return (
    <div className={styles.search}>
      <div  className={styles.input}>
      <Input />
      </div>
   
     <div className={styles.button}>
     <Button />
     </div>
     
    </div>
  );
};

export default SearchBox;

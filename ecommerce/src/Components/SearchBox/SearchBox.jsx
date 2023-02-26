import styles from "./SearchBox.module.css";
import Button from "../Atoms/Button/Button";
import Input from "../Atoms/Input/Input";

const SearchBox = () => {
  return (
    <div className={styles.search}>
      <Input />
      <Button />
     
    </div>
  );
};

export default SearchBox;

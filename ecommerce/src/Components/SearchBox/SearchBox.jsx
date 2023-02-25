import styles from './SearchBox.module.css';
import Button from '../Atoms/Button/Button';
import Input from '../Atoms/Input/Input';

const SearchBox = () => {
  return (
    <div className={styles.search}>
        <Button />
        <Input />
    </div>
  )
}

export default SearchBox;
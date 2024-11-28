import styles from './styles/SearchBtn.module.css';

interface SearchBtnProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const SearchBtn = ({ type = 'button', disabled }: SearchBtnProps) => (
  <button type={type} className={styles.searchBtn} disabled={disabled}>
    Search
  </button>
);

export default SearchBtn;

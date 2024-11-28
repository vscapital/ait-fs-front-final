// Search.tsx
import styles from './styles/SearchInput.module.css';
import { ChangeEvent, FocusEvent } from 'react';

interface SearchInputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
}: SearchInputProps) => (
  <input
    type="text"
    name={name}
    className={styles.searchInput}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
  />
);

export default SearchInput;

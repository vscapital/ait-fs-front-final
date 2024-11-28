import styles from './styles/CardBtn.module.css';
import { ReactNode } from 'react';

interface CardBtnProps {
  children: ReactNode;
  onClick: () => void;
}

const CardBtn = ({ children, onClick }: CardBtnProps) => (
  <button className={styles.cardBtn} onClick={onClick}>
    {children}
  </button>
);

export default CardBtn;

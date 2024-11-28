import { ReactNode } from 'react';
import styles from './styles/Card.module.css';
import CardBtn from './CardBtn';

export interface Action {
  name: string;
  onClick: () => void;
}

interface CardProps {
  children?: ReactNode;
  className?: string;
  actions?: Action[];
}

function Card({ children, className, actions }: CardProps) {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <div className={styles.blurBackground} />
      <div className={styles.container}>
        <div className={styles.card} />
        <div className={styles.content}>
          <div className={styles.childrenContainer}>{children}</div>
          {actions && actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action) => (
                <CardBtn key={action.name} onClick={action.onClick}>
                  {action.name}
                </CardBtn>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

import { NavLink } from 'react-router-dom';
import styles from './styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Weather App</div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          History
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

import styles from './styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        © {new Date().getFullYear()} Weather App. All rights reserved.
        Developed by
        <a
          href={'https://www.linkedin.com/in/vasylkhvostyk/'}
          target="_blank"
          rel="noreferrer"
        >
          Vasyl Khvostyk
        </a>
      </div>
    </footer>
  );
}

export default Footer;

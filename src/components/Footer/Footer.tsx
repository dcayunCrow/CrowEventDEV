import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} Crow Event · Todos los derechos reservados.
      </p>
    </footer>
  );
}
  
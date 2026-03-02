import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        ©2025 Crow Event Todos los derechos reservados // All rights reserved. Crow Event pertenece a Crow.
      </p>
    </footer>
  );
}

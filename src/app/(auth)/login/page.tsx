'use client';

import { useRouter } from 'next/navigation';
import styles from './login.module.scss';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Cuando tengamos el servicio de auth, implementar aquí
    router.push('/home');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <p className={styles.subtitle}>Bienvenido a Crow</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Ingresar
          </button>
        </form>

        <p className={styles.footer}>
          ¿No tienes cuenta? <a href="/signup">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './login.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleGoogleLogin = () => {
    // TODO: Implementar Google Auth
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Cuando tengamos el servicio de auth, implementar aquí
      router.push('/home');
    }
  };

  return (
    <div className={styles.loginScreen}>

      <div className={styles.logoContainer}>
        <Image
          src="/logos/crow.svg"
          alt="Crow Logo"
          width={68}
          height={68}
          className={styles.logoImage}
        />
        <h1 className={styles.logoText}>Crow</h1>
      </div>

      <div className={styles.loginContent}>

        <h2 className={styles.loginTitle}>Crear una cuenta o inicia sesión</h2>

        <button type="button" className={styles.btnGoogle} onClick={handleGoogleLogin}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.72 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
            <path d="M12 23C14.97 23 17.46 22.01 19.28 20.34L15.72 17.57C14.73 18.23 13.48 18.64 12 18.64C9.13 18.64 6.7 16.7 5.82 14.08H2.15V16.93C3.96 20.53 7.69 23 12 23Z" fill="#34A853"/>
            <path d="M5.82 14.08C5.6 13.42 5.47 12.72 5.47 12C5.47 11.28 5.6 10.58 5.82 9.92V7.07H2.15C1.4 8.56 1 10.23 1 12C1 13.77 1.4 15.44 2.15 16.93L5.82 14.08Z" fill="#FBBC05"/>
            <path d="M12 5.36C13.62 5.36 15.06 5.92 16.2 7.01L19.36 3.85C17.46 2.08 14.97 1 12 1C7.69 1 3.96 3.47 2.15 7.07L5.82 9.92C6.7 7.3 9.13 5.36 12 5.36Z" fill="#EA4335"/>
          </svg>
          <span>Continuar con Google</span>
        </button>

        <div className={styles.divider}>
          <div className={styles.line}></div>
          <span>o</span>
          <div className={styles.line}></div>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.btnSubmit}>
            <span>Continuar</span>
          </button>
        </form>

        <p className={styles.termsText}>
          Al hacer clic en continuar, aceptas nuestros Términos de Servicio y nuestra Política de Privacidad
        </p>

      </div>
    </div>
  );
}

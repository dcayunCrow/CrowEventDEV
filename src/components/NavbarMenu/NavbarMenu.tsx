'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LoginModal from '../LoginModal';
import styles from './NavbarMenu.module.scss';

interface NavbarMenuProps {
  onClose: () => void;
  isLoggedIn: boolean;
}

export default function NavbarMenu({ 
  onClose, 
  isLoggedIn
}: NavbarMenuProps) {
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = () => {
    router.push('/login');
    onClose();
  };

  const handleLogout = () => {
    // TODO: Implementar lógica de logout
    console.log('Cerrar sesión');
    onClose();
  };

  const handleProtectedAction = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
      // TODO: Implementar navegación o acción cuando esté logueado
      console.log('Usuario logueado - acción permitida');
    }
  };

  return (
    <>
      <div className={styles.navbarMenu}>
        {/* Topbar del menú con Logo y Botón Cerrar */}
        <div className={styles.menuTopbar}>
          <div className={styles.logoContainer}>
            <Image
              src="/logos/crow.svg"
              alt="Crow"
              width={29}
              height={38}
              className={styles.logoImage}
            />
            <p className={styles.logoText}>Crow</p>
          </div>
          
          <button className={styles.closeMenuBtn} onClick={onClose} aria-label="Cerrar menú">
            {/* TODO: cambiar por iconos de librería que vamos a definir */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Cuerpo del menú con las opciones */}
        <div className={`${styles.menuBody} ${isLoggedIn ? styles.loggedIn : styles.loggedOut}`}>
          {/* Lista de enlaces */}
          <div className={styles.menuItemGroup}>
            <button className={styles.menuLink} onClick={handleProtectedAction}>
              <span>Notificaciones</span>
            </button>
            <hr className={styles.divider} />
          </div>

          <div className={styles.menuItemGroup}>
            <button className={styles.menuLink} onClick={handleProtectedAction}>
              <span>Mi Actividad</span>
            </button>
            <hr className={styles.divider} />
          </div>

          <div className={styles.menuItemGroup}>
            <button className={styles.menuLink} onClick={handleProtectedAction}>
              <span>Mi Cuenta/Perfil</span>
            </button>
            <hr className={styles.divider} />
          </div>

          <div className={styles.menuItemGroup}>
            <button className={styles.menuLink}>
              <span>FAQ's</span>
            </button>
            <hr className={styles.divider} />
          </div>

          {/* Footer dinámico: Iniciar o Cerrar sesión */}
          {isLoggedIn ? (
            <div className={`${styles.menuFooter} ${styles.footerLogout}`}>
              <button className={styles.btnLogout} onClick={handleLogout}>
                <span>Cerrar Sesión</span>
              </button>
            </div>
          ) : (
            <div className={`${styles.menuFooter} ${styles.footerLogin}`}>
              <button className={styles.btnPrimary} onClick={handleLogin}>
                <span>Iniciar Sesión</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}

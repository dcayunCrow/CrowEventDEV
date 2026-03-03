'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Overlay from '../Overlay';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLoginClick = () => {
    router.push('/login');
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} zIndex={1001} />
      <div className={styles.loginModal} onClick={(e) => e.stopPropagation()}>
        
        <button 
          className={styles.closeBtn} 
          onClick={onClose} 
          aria-label="Cerrar"
        >
          {/* TODO: cambiar por iconos de librería que vamos a definir */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.textContent}>
          <h3>Crow Event</h3>
          <p>Para esta acción debe iniciar sesión o registrarse</p>
        </div>

        <button className={styles.btnPrimary} onClick={handleLoginClick}>
          <span>Iniciar Sesión</span>
        </button>

      </div>
    </>
  );
}

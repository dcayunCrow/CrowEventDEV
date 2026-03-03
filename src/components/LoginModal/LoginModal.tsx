'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LuX } from 'react-icons/lu';
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
          <LuX size={20} />
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

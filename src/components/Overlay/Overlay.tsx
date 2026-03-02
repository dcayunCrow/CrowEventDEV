import React from 'react';
import styles from './Overlay.module.scss';

interface OverlayProps {
  onClick: () => void;
  zIndex?: number;
}

export default function Overlay({ onClick, zIndex = 998 }: OverlayProps) {
  return (
    <div 
      className={styles.overlay} 
      onClick={onClick}
      aria-label="Cerrar"
      style={{ zIndex }}
    />
  );
}

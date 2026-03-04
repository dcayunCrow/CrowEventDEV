import React from 'react';
import styles from './Overlay.module.scss';

interface OverlayProps {
  onClick: () => void;
  zIndex?: number;
}

export default function Overlay({ onClick, zIndex = 998 }: OverlayProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div 
      className={styles.overlay} 
      onClick={handleClick}
      aria-label="Cerrar"
      style={{ zIndex }}
    />
  );
}

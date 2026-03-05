'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './ExploreCard.module.scss';

export interface ExploreCardProps {
  categoryId: string;
  title: string;
  imageUrl: string;
  onClick?: () => void;
}

export default function ExploreCard({ categoryId, title, imageUrl, onClick }: ExploreCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/explore/${categoryId}`);
    }
  };

  return (
    <button 
      className={styles.categoryCard} 
      onClick={handleClick} 
      aria-label={`Ir a categoría ${title}`}
    >
      {/* Capa de fondo con la imagen y el gradiente oscuro */}
      <div className={styles.categoryBg}>
        <Image
          src={imageUrl}
          alt=""
          fill
          className={styles.bgImage}
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
        />
        <div className={styles.overlay} />
      </div>
      
      {/* Texto de la categoría */}
      <span className={styles.categoryTitle}>
        {title}
      </span>
    </button>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import EventCardMenu from '../EventCardMenu';
import Overlay from '../Overlay';
import styles from './SearchResultCard.module.scss';

export interface SearchResultCardProps {
  eventId: string;
  title: string;
  date: string;
  venue: string;
  imageUrl?: string;
  onClick?: (eventId: string) => void;
}

export default function SearchResultCard({
  eventId,
  title,
  date,
  venue,
  imageUrl,
  onClick
}: SearchResultCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Función para manejar el clic en los 3 puntitos sin disparar el clic de toda la tarjeta
  const handleOptionsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div 
        className={styles.searchResultCard} 
        onClick={() => onClick && onClick(eventId)}
      >
        {/* Miniatura de la tarjeta */}
        <div className={styles.cardThumbnail}>
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt=""
                fill
                className={styles.imageBackdrop}
                sizes="74px"
              />
              <Image
                src={imageUrl}
                alt={title}
                fill
                className={styles.eventImage}
                sizes="74px"
              />
            </>
          ) : (
            <div className={styles.fallback}>
              <Image
                src="/logos/crow.svg"
                alt="Crow Logo"
                width={40}
                height={40}
                className={styles.placeholderLogo}
              />
            </div>
          )}
        </div>

        {/* Información del evento */}
        <div className={styles.cardInfo}>
          <h4 className={styles.eventTitle} title={title}>{title}</h4>
          <p className={styles.eventDate}>{date}</p>
          <p className={styles.eventVenue}>{venue}</p>
        </div>

        {/* Botón de 3 puntos (more_vert) */}
        <button 
          className={styles.moreOptionsBtn} 
          onClick={handleOptionsClick}
          aria-label="Más opciones"
        >
          {/* TODO: cambiar por iconos de librería que vamos a definir */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <>
          <Overlay onClick={handleMenuClose} />
          <EventCardMenu 
            onClose={handleMenuClose}
            title={title}
            date={date}
          />
        </>
      )}
    </>
  );
}

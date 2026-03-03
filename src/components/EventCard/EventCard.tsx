'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import EventCardMenu from '../EventCardMenu';
import Overlay from '../Overlay';
import styles from './EventCard.module.scss';

interface EventCardProps {
  imageUrl?: string;
  title: string;
  date: string;
  venue: string;
  eventId: string;
  initialFavorite?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  date,
  venue,
  eventId,
  initialFavorite = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // TODO: Aquí iría la lógica para guardar en backend/localStorage
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.eventCard}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt=""
              fill
              className={styles.imageBackdrop}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={styles.eventImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </>
        ) : (
          <div className={styles.placeholderImage}>
            <Image
              src="/logos/crow.svg"
              alt="Crow Logo"
              width={120}
              height={120}
              className={styles.placeholderLogo}
            />
          </div>
        )}
        
        <button 
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
          onClick={handleFavoriteClick}
          aria-label="Add to favorites"
        >
          {/* TODO: cambiar por iconos de librería que vamos a definir */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.datetime}>{date}</p>
          </div>
          
          <button 
            className={styles.moreButton} 
            onClick={handleMenuToggle}
            aria-label="More options"
          >
            {/* TODO: cambiar por iconos de librería que vamos a definir */}
            <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
              <circle cx="2" cy="2" r="2" />
              <circle cx="2" cy="8" r="2" />
              <circle cx="2" cy="14" r="2" />
            </svg>
          </button>
        </div>

        <div className={styles.venue}>
          {/* TODO: cambiar por iconos de librería que vamos a definir */}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={styles.venueIcon}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{venue}</span>
        </div>
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
    </div>
  );
};

export default EventCard;

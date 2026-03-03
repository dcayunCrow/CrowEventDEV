'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LuHeart, LuMap, LuEllipsisVertical } from 'react-icons/lu';
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
          <LuHeart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
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
            <LuEllipsisVertical size={24} />
          </button>
        </div>

        <div className={styles.venue}>
          <LuMap size={20} />
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

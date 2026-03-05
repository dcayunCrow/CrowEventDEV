'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LuEllipsisVertical } from 'react-icons/lu';
import { createPortal } from 'react-dom';
import EventCardMenu from '../EventCardMenu';
import Overlay from '../Overlay';
import styles from './EventCardHorizontal.module.scss';

export interface EventCardHorizontalProps {
  eventId: string;
  title: string;
  date: string;
  venue: string;
  imageUrl?: string;
  onClick?: (eventId: string) => void;
}

export default function EventCardHorizontal({
  eventId,
  title,
  date,
  venue,
  imageUrl,
  onClick,
}: EventCardHorizontalProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick(eventId);
    } else {
      router.push(`/event/${eventId}`);
    }
  };

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
        className={styles.card}
        onClick={handleCardClick}
      >
        {/* Miniatura */}
        <div className={styles.cardThumbnail}>
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt=""
                fill
                className={styles.imageBackdrop}
                sizes="4.625rem"
              />
              <Image
                src={imageUrl}
                alt={title}
                fill
                className={styles.eventImage}
                sizes="4.625rem"
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

        {/* Info */}
        <div className={styles.cardInfo}>
          <h4 className={styles.eventTitle} title={title}>{title}</h4>
          <p className={styles.eventDate}>{date}</p>
          <p className={styles.eventVenue}>{venue}</p>
        </div>

        {/* Más opciones */}
        <button
          className={styles.moreOptionsBtn}
          onClick={handleOptionsClick}
          aria-label="Más opciones"
        >
          <LuEllipsisVertical size={20} />
        </button>
      </div>

      {isMenuOpen && createPortal(
        <>
          <Overlay onClick={handleMenuClose} />
          <EventCardMenu
            onClose={handleMenuClose}
            title={title}
            date={date}
          />
        </>,
        document.body
      )}
    </>
  );
}

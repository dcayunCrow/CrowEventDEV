'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LuEllipsisVertical, LuHeart, LuBell, LuBookmark } from 'react-icons/lu';
import { createPortal } from 'react-dom';
import EventCardMenu from '../EventCardMenu';
import Overlay from '../Overlay';
import { formatEventDate } from '@/utils/dateUtils';
import styles from './EventCardHorizontal.module.scss';

export type CardAction = 'like' | 'notify' | 'save';

const ACTION_ICON: Record<CardAction, React.ReactNode> = {
  like:   <LuHeart size={18} />,
  notify: <LuBell size={18} />,
  save:   <LuBookmark size={18} />,
};

const ACTION_LABEL: Record<CardAction, string> = {
  like:   'Quitar me gusta',
  notify: 'Quitar avisarme',
  save:   'Quitar guardado',
};

export interface EventCardHorizontalProps {
  eventId: string;
  title: string;
  date: string;
  venue: string;
  imageUrl?: string;
  action?: CardAction;
  attended?: boolean;
  onActionClick?: (eventId: string, action: CardAction) => void;
  onClick?: (eventId: string) => void;
}

export default function EventCardHorizontal({
  eventId,
  title,
  date,
  venue,
  imageUrl,
  action,
  attended,
  onActionClick,
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

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (action && onActionClick) {
      onActionClick(eventId, action);
    }
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.card}${attended ? ` ${styles.cardAttended}` : ''}`}
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
          <p className={styles.eventDate}>{formatEventDate(date)}</p>
          <p className={styles.eventVenue}>{venue}</p>
        </div>

        {/* Acciones */}
        <div className={styles.cardActions}>
          {action ? (
            <button
              className={styles.actionButton}
              onClick={handleActionClick}
              aria-label={ACTION_LABEL[action]}
            >
              {ACTION_ICON[action]}
            </button>
          ) : (
            <span className={styles.actionSpacer} />
          )}

          <button
            className={styles.moreOptionsBtn}
            onClick={handleOptionsClick}
            aria-label="Más opciones"
          >
            <LuEllipsisVertical size={20} />
          </button>
        </div>
        
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

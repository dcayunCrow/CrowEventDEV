'use client';

import React from 'react';
import Image from 'next/image';
import { LuChevronRight } from 'react-icons/lu';
import styles from './RecommendedEventRow.module.scss';

export interface EventItem {
  eventId: string;
  imageUrl?: string;
  title?: string;
  venue?: string;
  date?: string;
}

export interface RecommendedEventRowProps {
  rowTitle: string;
  events: EventItem[];
  onViewAllClick?: () => void;
  onEventClick?: (eventId: string) => void;
}

export default function RecommendedEventRow({ 
  rowTitle, 
  events, 
  onViewAllClick,
  onEventClick 
}: RecommendedEventRowProps) {
  
  const handleViewAll = () => {
    if (onViewAllClick) {
      onViewAllClick();
    } else {
      console.log('Ver todos:', rowTitle);
    }
  };

  const handleEventClick = (eventId: string) => {
    if (onEventClick) {
      onEventClick(eventId);
    } else {
      console.log('Evento clickeado:', eventId);
    }
  };

  return (
    <div className={styles.eventRow}>
      
      <div className={styles.rowHeader} onClick={handleViewAll}>
        <h3>{rowTitle}</h3>
        <div className={styles.iconCircle}>
          <LuChevronRight size={16} strokeWidth={3} />
        </div>
      </div>

      <div className={styles.rowScrollArea}>
        {events.map((event) => {
          
          // Si tiene imagen, renderizamos la card normal
          if (event.imageUrl) {
            return (
              <div 
                key={event.eventId} 
                className={`${styles.cardItem} ${styles.cardImage}`}
                onClick={() => handleEventClick(event.eventId)}
                aria-label={`Ver evento ${event.title || event.eventId}`}
              >
                <Image
                  src={event.imageUrl}
                  alt=""
                  fill
                  className={styles.imageBackdrop}
                  sizes="9.25rem"
                />
                <Image
                  src={event.imageUrl}
                  alt={event.title || 'Evento'}
                  fill
                  className={styles.eventImage}
                  sizes="9.25rem"
                />
              </div>
            );
          }

          // Si NO tiene imagen, usamos las propiedades del mock para el fallback
          return (
            <div 
              key={event.eventId} 
              className={`${styles.cardItem} ${styles.cardFallback}`}
              onClick={() => handleEventClick(event.eventId)}
            >
              <div className={styles.logoContainer}>
                <Image
                  src="/logos/crow.svg"
                  alt="Crow Logo"
                  width={60}
                  height={60}
                  className={styles.placeholderLogo}
                />
              </div>
              <div className={styles.textContent}>
                <p className={styles.eventVenue}>{event.venue || 'Lugar por definir'}</p>
                <p className={styles.eventTitle}>{event.title || 'Nombre de evento'}</p>
                <p className={styles.eventDate}>{event.date || 'Fecha a confirmar'}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

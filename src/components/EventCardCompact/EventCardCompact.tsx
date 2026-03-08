'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { formatEventDate } from '@/utils/dateUtils';
import styles from './EventCardCompact.module.scss';

export interface EventCardCompactProps {
  eventId: string;
  imageUrl?: string;
  title?: string;
  venue?: string;
  date?: string;
  onClick?: (eventId: string) => void;
}

export default function EventCardCompact({
  eventId,
  imageUrl,
  title,
  venue,
  date,
  onClick,
}: EventCardCompactProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(eventId);
    } else {
      router.push(`/event/${eventId}`);
    }
  };

  if (imageUrl) {
    return (
      <div
        className={`${styles.card} ${styles.cardImage}`}
        onClick={handleClick}
        role="button"
        aria-label={`Ver evento ${title || eventId}`}
      >
        <Image
          src={imageUrl}
          alt=""
          fill
          className={styles.imageBackdrop}
          sizes="9.25rem"
        />
        <Image
          src={imageUrl}
          alt={title || 'Evento'}
          fill
          className={styles.eventImage}
          sizes="9.25rem"
        />
      </div>
    );
  }

  return (
    <div
      className={`${styles.card} ${styles.cardFallback}`}
      onClick={handleClick}
      role="button"
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
        <p className={styles.eventVenue}>{venue || 'Lugar por definir'}</p>
        <p className={styles.eventTitle}>{title || 'Nombre de evento'}</p>
        <p className={styles.eventDate}>{date ? formatEventDate(date) : 'Fecha a confirmar'}</p>
      </div>
    </div>
  );
}

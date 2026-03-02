import { Event } from '@/types/event';
import Image from 'next/image';
import styles from './EventCarouselCard.module.scss';

interface EventCarouselCardProps {
  event: Event;
}

export default function EventCarouselCard({ event }: EventCarouselCardProps) {
  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Obtener venue del detail
  const venue = (event.detail as any)?.venue || 'Por confirmar';
  const hasImage = event.media.imgs && event.media.imgs.length > 0;
  
  return (
    <article className={styles.card}>
      {hasImage ? (
        <div 
          className={styles.background}
          style={{ backgroundImage: `url(${event.media.imgs[0]})` }}
        />
      ) : (
        <div className={styles.backgroundPlaceholder}>
          <Image
            src="/logos/crow.svg"
            alt="Crow Logo"
            width={80}
            height={80}
            className={styles.placeholderLogo}
          />
        </div>
      )}
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.venue}>{venue}</p>
        <p className={styles.date}>{formatDate(event.schedule.date_start)}</p>
      </div>
    </article>
  );
}

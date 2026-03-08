'use client';

import EventCardCompact from '@/components/EventCardCompact';
import EventCard from '@/components/EventCard';
import EventCardHorizontal from '@/components/EventCardHorizontal';
import { useViewMode } from '@/contexts/ViewModeContext';
import styles from './EventsGrid.module.scss';

export interface EventGridItem {
  id: string;
  imageUrl?: string;
  title?: string;
  venue?: string;
  date?: string;
}

interface EventsGridProps {
  events: EventGridItem[];
  emptyText?: string;
}

export default function EventsGrid({
  events,
  emptyText = 'No hay eventos disponibles por el momento',
}: EventsGridProps) {
  const { viewMode } = useViewMode();

  if (events.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>{emptyText}</p>
      </div>
    );
  }

  return (
    <>
      {viewMode === 'grilla' && (
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <EventCardCompact
              key={event.id}
              eventId={event.id}
              imageUrl={event.imageUrl}
              title={event.title}
              venue={event.venue}
              date={event.date}
            />
          ))}
        </div>
      )}

      {viewMode === 'tarjetas' && (
        <div className={styles.eventsCards}>
          {events.map((event) => (
            <EventCard
              key={event.id}
              eventId={event.id}
              imageUrl={event.imageUrl}
              title={event.title ?? ''}
              venue={event.venue ?? ''}
              date={event.date ?? ''}
            />
          ))}
        </div>
      )}

      {viewMode === 'lista' && (
        <div className={styles.eventsList}>
          {events.map((event) => (
            <EventCardHorizontal
              key={event.id}
              eventId={event.id}
              imageUrl={event.imageUrl}
              title={event.title ?? ''}
              venue={event.venue ?? ''}
              date={event.date ?? ''}
            />
          ))}
        </div>
      )}
    </>
  );
}

'use client';

import EventCardHorizontal from '@/components/EventCardHorizontal';
import type { EventGridItem } from '@/components/EventsGrid';
import styles from './ActivityEventList.module.scss';

interface ActivityEventListProps {
  events: EventGridItem[];
}

export default function ActivityEventList({ events }: ActivityEventListProps) {
  if (events.length === 0) return null;

  return (
    <div className={styles.list}>
      {events.map((event) => (
        <EventCardHorizontal
          key={event.id}
          eventId={event.id}
          title={event.title ?? ''}
          date={event.date ?? ''}
          venue={event.venue ?? ''}
          imageUrl={event.imageUrl}
        />
      ))}
    </div>
  );
}

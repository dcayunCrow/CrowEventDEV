'use client';

import EventCardHorizontal from '@/components/EventCardHorizontal';
import type { CardAction } from '@/components/EventCardHorizontal/EventCardHorizontal';
import type { EventGridItem } from '@/components/EventsGrid';
import styles from './ActivityEventList.module.scss';

interface ActivityEventListProps {
  events: EventGridItem[];
  action?: CardAction;
  attended?: boolean;
}

export default function ActivityEventList({ events, action, attended }: ActivityEventListProps) {
  if (events.length === 0) return null;

  const handleActionClick = (eventId: string, actionType: CardAction) => {
    // TODO: conectar con lógica real (quitar like, quitar guardado, etc.)
    console.log(`${actionType} toggled for event ${eventId}`);
  };

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
          action={action}
          attended={attended}
          onActionClick={handleActionClick}
        />
      ))}
    </div>
  );
}

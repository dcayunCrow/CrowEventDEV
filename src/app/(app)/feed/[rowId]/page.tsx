'use client';

import { useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getRecommendedListByRowId } from '@/data/mockRecommendedEvents';
import EventsGrid, { EventGridItem } from '@/components/EventsGrid';
import styles from './feed.module.scss';

export default function FeedPage() {
  const params = useParams();
  const router = useRouter();
  const rowId = params.rowId as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const list = useMemo(() => getRecommendedListByRowId(rowId), [rowId]);

  const gridEvents = useMemo<EventGridItem[]>(() =>
    (list?.events ?? []).map((event) => ({
      id: event._id,
      imageUrl: event.media.imgs[0],
      title: event.title,
      venue: event.detail?.venue || event.detail?.address || 'Ubicación por confirmar',
      date: new Date(event.schedule.date_start).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    })),
    [list]
  );

  if (!list) {
    router.replace('/home');
    return null;
  }

  return (
    <div className={styles.feedPage}>
      <section className={styles.eventsSection}>
        <EventsGrid
          events={gridEvents}
          emptyText="No hay eventos disponibles en esta sección por el momento"
        />
      </section>
    </div>
  );
}

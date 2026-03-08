'use client';

import { useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCategoryById, getEventsByCategory } from '@/data/mockCategories';
import type { Category } from '@/data/mockCategories';
import { mockEvents } from '@/data/mockEvents';
import EventsGrid, { EventGridItem } from '@/components/EventsGrid';
import styles from './category.module.scss';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category: Category | undefined = useMemo(
    () => getCategoryById(id),
    [id]
  );

  const events = useMemo(
    () => category ? getEventsByCategory(id, mockEvents) : [],
    [id, category]
  );

  const gridEvents = useMemo<EventGridItem[]>(() =>
    events.map((event) => ({
      id: event._id,
      imageUrl: event.media.imgs[0],
      title: event.title,
      venue: event.detail?.venue || event.detail?.address || 'Ubicación por confirmar',
      date: event.schedule.date_start,
    })),
    [events]
  );

  if (!category) {
    router.replace('/explore');
    return null;
  }

  // TODO: reemplazar events por: await fetchEventsByCategory(category.id)

  return (
    <div className={styles.categoryPage}>
      <section className={styles.eventsSection}>
        <EventsGrid
          events={gridEvents}
          emptyText="No hay eventos disponibles en esta categoría por el momento"
        />
      </section>
    </div>
  );
}

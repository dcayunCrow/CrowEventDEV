'use client';

import { useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getCategoryById, getEventsByCategory } from '@/data/mockCategories';
import type { Category } from '@/data/mockCategories';
import { mockEvents } from '@/data/mockEvents';
import EventCardCompact from '@/components/EventCardCompact';
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

  if (!category) {
    router.replace('/explore');
    return null;
  }

  // TODO: reemplazar events por: await fetchEventsByCategory(category.id)
  // Payload disponible: category.id, category.title, category.imageUrl

  return (
    <div className={styles.categoryPage}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <Image
          src={category.imageUrl}
          alt={category.title}
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.categoryTitle}>{category.title}</h1>
        </div>
      </div>

      {/* ── Eventos ── */}
      <section className={styles.eventsSection}>
        <h2 className={styles.sectionTitle}>Eventos</h2>

        {events.length > 0 ? (
          <div className={styles.eventsGrid}>
            {events.map((event) => {
              const date = new Date(event.schedule.date_start);
              const formattedDate = date.toLocaleDateString('es-AR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              });

              return (
                <EventCardCompact
                  key={event._id}
                  eventId={event._id}
                  imageUrl={event.media.imgs[0]}
                  title={event.title}
                  venue={event.detail?.venue || event.detail?.address || 'Ubicación por confirmar'}
                  date={formattedDate}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>
              No hay eventos disponibles en esta categoría por el momento
            </p>
          </div>
        )}
      </section>

    </div>
  );
}

'use client';

import { useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCategoryById, getEventsByCategory } from '@/data/mockCategories';
import type { Category } from '@/data/mockCategories';
import { mockEvents } from '@/data/mockEvents';
import EventCardCompact from '@/components/EventCardCompact';
import EventCard from '@/components/EventCard';
import EventCardHorizontal from '@/components/EventCardHorizontal';
import { useViewMode } from '@/contexts/ViewModeContext';
import styles from './category.module.scss';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { viewMode } = useViewMode();

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

  const formattedEvents = useMemo(() =>
    events.map((event) => ({
      ...event,
      formattedDate: new Date(event.schedule.date_start).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    })),
    [events]
  );

  return (
    <div className={styles.categoryPage}>
      <section className={styles.eventsSection}>
        {formattedEvents.length > 0 ? (
          <>
            {/* ── Grilla (2-4 columnas cuadradas) ── */}
            {viewMode === 'grilla' && (
              <div className={styles.eventsGrid}>
                {formattedEvents.map((event) => (
                  <EventCardCompact
                    key={event._id}
                    eventId={event._id}
                    imageUrl={event.media.imgs[0]}
                    title={event.title}
                    venue={event.detail?.venue || event.detail?.address || 'Ubicación por confirmar'}
                    date={event.formattedDate}
                  />
                ))}
              </div>
            )}

            {/* ── Tarjetas (1 columna, card compacta centrada) ── */}
            {viewMode === 'tarjetas' && (
              <div className={styles.eventsCards}>
                {formattedEvents.map((event) => (
                  <EventCard
                    key={event._id}
                    eventId={event._id}
                    imageUrl={event.media.imgs[0]}
                    title={event.title}
                    venue={event.detail?.venue || event.detail?.address || 'Ubicación por confirmar'}
                    date={event.formattedDate}
                  />
                ))}
              </div>
            )}

            {/* ── Lista (horizontal) ── */}
            {viewMode === 'lista' && (
              <div className={styles.eventsList}>
                {formattedEvents.map((event) => (
                  <EventCardHorizontal
                    key={event._id}
                    eventId={event._id}
                    imageUrl={event.media.imgs[0]}
                    title={event.title}
                    venue={event.detail?.venue || event.detail?.address || 'Ubicación por confirmar'}
                    date={event.formattedDate}
                  />
                ))}
              </div>
            )}
          </>
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

'use client';

import { useMemo } from 'react';
import SearchResultCard from '../SearchResultCard';
import styles from './SearchResults.module.scss';

interface Event {
  _id: string;
  title: string;
  media: {
    imgs: string[];
  };
  schedule: {
    date_start: string;
  };
  detail: {
    venue?: string;
    address?: string;
  };
}

interface SearchResultsProps {
  searchQuery: string;
  events: Event[];
}

export default function SearchResults({ searchQuery, events }: SearchResultsProps) {
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return events.filter(evento => {
      const matchTitle = evento.title.toLowerCase().includes(query);
      const matchVenue = (evento.detail?.venue?.toLowerCase() || '').includes(query);
      const matchAddress = (evento.detail?.address?.toLowerCase() || '').includes(query);
      
      return matchTitle || matchVenue || matchAddress;
    });
  }, [searchQuery, events]);

  if (!searchQuery.trim()) {
    return null;
  }

  return (
    <div className={styles.searchResults}>

      {filteredEvents.length > 0 ? (
        <div className={styles.resultsGrid}>
          {filteredEvents.map((evento) => {
            const eventDate = new Date(evento.schedule.date_start);
            const formattedDate = eventDate.toLocaleDateString('es-AR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            });

            return (
              <SearchResultCard
                key={evento._id}
                eventId={evento._id}
                imageUrl={evento.media.imgs[0]}
                title={evento.title}
                date={formattedDate}
                venue={evento.detail?.venue || evento.detail?.address || 'Ubicación por confirmar'}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>No se encontraron eventos para "{searchQuery}"</p>
          <p className={styles.suggestion}>Intenta con otros términos de búsqueda</p>
        </div>
      )}
    </div>
  );
}

'use client';

import { useMemo } from 'react';
import EventCardHorizontal from '../EventCardHorizontal';
import { Event } from '@/types/event';
import styles from './SearchResults.module.scss';

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
          {filteredEvents.map((evento) => (
            <EventCardHorizontal
              key={evento._id}
              eventId={evento._id}
              imageUrl={evento.media.imgs[0]}
              title={evento.title}
              date={evento.schedule.date_start}
              venue={evento.detail?.venue || evento.detail?.address || 'Ubicación por confirmar'}
            />
          ))}
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

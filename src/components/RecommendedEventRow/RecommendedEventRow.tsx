'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LuChevronRight } from 'react-icons/lu';
import EventCardCompact from '@/components/EventCardCompact';
import styles from './RecommendedEventRow.module.scss';

export interface EventItem {
  eventId: string;
  imageUrl?: string;
  title?: string;
  venue?: string;
  date?: string;
}

export interface RecommendedEventRowProps {
  rowTitle: string;
  events: EventItem[];
  onViewAllClick?: () => void;
  onEventClick?: (eventId: string) => void;
}

export default function RecommendedEventRow({ 
  rowTitle, 
  events, 
  onViewAllClick,
  onEventClick 
}: RecommendedEventRowProps) {
  const router = useRouter();
  
  const handleViewAll = () => {
    if (onViewAllClick) {
      onViewAllClick();
    } else {
      console.log('Ver todos:', rowTitle);
    }
  };

  const handleEventClick = (eventId: string) => {
    if (onEventClick) {
      onEventClick(eventId);
    } else {
      router.push(`/event/${eventId}`);
    }
  };

  return (
    <div className={styles.eventRow}>
      
      <div className={styles.rowHeader} onClick={handleViewAll}>
        <h3>{rowTitle}</h3>
        <div className={styles.iconCircle}>
          <LuChevronRight size={16} strokeWidth={3} />
        </div>
      </div>

      <div className={styles.rowScrollArea}>
        {events.map((event) => (
          <EventCardCompact
            key={event.eventId}
            eventId={event.eventId}
            imageUrl={event.imageUrl}
            title={event.title}
            venue={event.venue}
            date={event.date}
            onClick={handleEventClick}
          />
        ))}
      </div>
      
    </div>
  );
}

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Event } from '@/types/event';
import EventCarouselCard from '@/components/EventCarouselCard';
import styles from './EventCarousel.module.scss';

interface EventCarouselProps {
  events: Event[];
  autoplayInterval?: number;
}

export default function EventCarousel({ events, autoplayInterval = 3000 }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = useCallback((index: number, smooth: boolean = true) => {
    if (!carouselRef.current) return;
    
    const cardWidth = carouselRef.current.scrollWidth / events.length;
    carouselRef.current.scrollTo({
      left: cardWidth * index,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, [events.length]);

  // Auto-advance
  useEffect(() => {
    if (events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % events.length;
        return nextIndex;
      });
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [events.length, autoplayInterval]);

  // Handle scrolling
  useEffect(() => {
    scrollToIndex(currentIndex, true);
  }, [currentIndex, scrollToIndex]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        {events.map((event) => (
          <EventCarouselCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}

'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState, useMemo, useEffect, useRef } from 'react';
import { LuHeart, LuShare2, LuBell, LuMap, LuCalendar, LuClock, LuTicket, LuMessageSquareText } from 'react-icons/lu';
import { mockEvents } from '@/data/mockEvents';
import AccordionItem from '@/components/AccordionItem';
import EventNotFound from '@/components/EventNotFound';
import { formatDate, formatTime } from '@/utils/dateUtils';
import { formatPrice } from '@/utils/priceUtils';
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from '@/utils/youtubeUtils';
import styles from './event.module.scss';

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.id as string;
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isTicketSectionVisible, setIsTicketSectionVisible] = useState(false);
  const [organizerImgError, setOrganizerImgError] = useState(false);
  const ticketSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Buscar el evento por ID
  const event = useMemo(() => {
    return mockEvents.find(e => e._id === eventId);
  }, [eventId]);

  useEffect(() => {
    const el = ticketSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsTicketSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [event]);

  if (!event) {
    return <EventNotFound />;
  }

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShareClick = () => {
    // TODO: Implementar share
    console.log('Share event:', event._id);
  };

  const handleNotifyClick = () => {
    // TODO: Implementar notificación
    console.log('Notify for event:', event._id);
  };

  const handleGetTickets = () => {
    if (event.ticket.url) {
      window.open(event.ticket.url, '_blank');
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Image */}
      <div className={styles.heroImage}>
        {event.media.imgs[0] ? (
          <>
            {/* Capa 1: Fondo desenfocado (Aura) */}
            <div 
              className={styles.bgBlur}
              style={{ backgroundImage: `url(${event.media.imgs[0]})` }}
              aria-hidden="true"
            />

            {/* Capa 2: Contenedor de imagen con backdrop y foreground */}
            <div className={styles.imageContainer}>
              <Image
                src={event.media.imgs[0]}
                alt=""
                fill
                className={styles.imageBackdrop}
                sizes="100vw"
                priority
              />
              <Image
                src={event.media.imgs[0]}
                alt={event.title}
                fill
                className={styles.foregroundImage}
                sizes="100vw"
                priority
              />
            </div>
          </>
        ) : (
          <div className={styles.imageContainer}>
            <div className={styles.placeholderImage}>
              <Image
                src="/logos/crow.svg"
                alt="Crow Logo"
                width={120}
                height={120}
                className={styles.placeholderLogo}
              />
            </div>
          </div>
        )}
        
        {/* Action buttons overlay */}
        {/* TODO: Implement action buttons
        <div className={styles.actionButtons}>
          <button 
            className={styles.actionBtn}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            <LuHeart 
              size={24} 
              fill={isFavorite ? 'currentColor' : 'none'}
            />
          </button>
          <button 
            className={styles.actionBtn}
            onClick={handleShareClick}
            aria-label="Compartir evento"
          >
            <LuShare2 size={24} />
          </button>
          <button 
            className={styles.actionBtn}
            onClick={handleNotifyClick}
            aria-label="Recibir notificaciones"
          >
            <LuBell size={24} />
          </button>
        </div>
        */}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{event.title}</h1>
          {event.subtitle && (
            <p className={styles.subtitle}>{event.subtitle}</p>
          )}
        </div>

        {/* Schedule Info */}
        <div className={styles.infoSection}>
          <AccordionItem
            title={formatDate(event.schedule.date_start, isClient)}
            icon={<LuCalendar size={20} />}
          />
          
          <AccordionItem
            title={`${formatTime(event.schedule.date_start, isClient)} hs`}
            icon={<LuClock size={20} />}
          />

          <AccordionItem
            title={event.detail?.venue || event.detail?.address || "Ver en el mapa"}
            icon={<LuMap size={20} />}
          >
            {event.detail?.address && (
              <>
                {event.detail.venue && (
                  <p className={styles.locationAddress}>{event.detail.address}</p>
                )}
                <div className={styles.mapContainer}>
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(event.detail.address)}&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${event.detail.venue || 'ubicación'}`}
                  />
                </div>
              </>
            )}
          </AccordionItem>

          {event.description && (
            <AccordionItem
              title="Mas Información"
              icon={<LuMessageSquareText size={20} />}
            >
              <p className={styles.description}>{event.description}</p>
            </AccordionItem>
          )}
        </div>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className={styles.tagsSection}>
            {event.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Ticket Info */}
        <div className={styles.ticketSection} ref={ticketSectionRef}>
          <div className={styles.ticketInfo}>
            <LuTicket size={24} />
            <div>
              <p className={styles.ticketLabel}>Precio</p>
              <p className={styles.ticketPrice}>{formatPrice(event.ticket)}</p>
            </div>
          </div>
          
          {event.ticket.url && (
            <button 
              className={styles.getTicketsBtn}
              onClick={handleGetTickets}
            >
              Conseguir entradas
            </button>
          )}
        </div>

        {/* Video Section */}
        {event.media.videos && event.media.videos.length > 0 && (() => {
          const embedUrl = getYouTubeEmbedUrl(event.media.videos[0]);
          const thumbnailUrl = getYouTubeThumbnail(event.media.videos[0]);

          return embedUrl ? (
            <div className={styles.videoSection}>
              <div className={styles.videoWrapper}>
                {thumbnailUrl && (
                  <div
                    className={styles.videoBgBlur}
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                    aria-hidden="true"
                  />
                )}
                <div className={styles.videoContainer}>
                  <iframe
                    src={embedUrl}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={`Video de ${event.title}`}
                  />
                </div>
              </div>
            </div>
          ) : null;
        })()}

        {/* Organizer Info */}
        {event.ticket.contact && (
          <div className={styles.organizerSection}>
            <h2 className={styles.sectionTitle}>Organizador</h2>
            <div className={styles.organizerCard}>
              {event.ticket.contact.img && !organizerImgError && (
                <Image
                  src={event.ticket.contact.img}
                  alt={event.ticket.contact.name}
                  width={48}
                  height={48}
                  className={styles.organizerIcon}
                  onError={() => setOrganizerImgError(true)}
                />
              )}
              <div className={styles.organizerInfo}>
                <p className={styles.organizerName}>{event.ticket.contact.name}</p>
                {event.ticket.contact.website && (
                  <p className={styles.organizerWebsite}>{event.ticket.contact.website}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Footer */}
      {event.ticket.url && !isTicketSectionVisible && (
        <div className={styles.stickyFooter}>
          <button
            className={styles.getTicketsBtn}
            onClick={handleGetTickets}
          >
            Conseguir entradas
          </button>
        </div>
      )}
    </div>
  );
}

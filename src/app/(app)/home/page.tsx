import styles from './home.module.scss';
import { getActiveEvents } from '@/data/mockEvents';
import { getRecommendedListByTitle } from '@/data/mockRecommendedEvents';
import EventCarousel from '@/components/EventCarousel';
import EventCard from '@/components/EventCard';
import RecommendedEventRow from '@/components/RecommendedEventRow';

export default function HomePage() {
  const eventos = getActiveEvents();
  
  // Obtener la lista de eventos recomendados
  const recommendedList = getRecommendedListByTitle('Creemos que estos te van a encantar');
  
  // Mapear los datos al formato que espera el componente
  const recommendedEvents = recommendedList?.events.map((evento) => {
    const eventDate = new Date(evento.schedule.date_start);
    const formattedDate = eventDate.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    return {
      eventId: evento._id,
      imageUrl: evento.media.imgs[0],
      title: evento.title,
      venue: evento.detail.venue || evento.detail.address || 'Ubicación por confirmar',
      date: formattedDate
    };
  }) || [];

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        {/* Carrusel de eventos destacados */}
        <EventCarousel events={eventos} autoplayInterval={3000} />
      </header>

      {/* Eventos recomendados */}
      {recommendedList && (
        <RecommendedEventRow
          rowTitle={recommendedList.title}
          events={recommendedEvents}
        />
      )}

      {/* Lista de todos los eventos */}
      <section className={styles.eventsList}>
        <div className={styles.eventos}>
          {eventos.map((evento) => {
            const eventDate = new Date(evento.schedule.date_start);
            const formattedDate = eventDate.toLocaleDateString('es-AR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            });

            return (
              <EventCard
                key={evento._id}
                eventId={evento._id}
                imageUrl={evento.media.imgs[0]}
                title={evento.title}
                date={formattedDate}
                venue={(evento.detail as any)?.venue || 'Ubicación por confirmar'}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

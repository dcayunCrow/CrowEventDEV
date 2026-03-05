import type { Event, EventType } from '@/types/event';

export interface Category {
  id: string;
  title: string;
  imageUrl: string;
}

// Mapeo de categoría → tipos de evento y/o tags para filtrar el mock
// (se reemplaza por llamada al endpoint cuando esté disponible)
interface CategoryFilter {
  types?: EventType[];
  tags?: string[];
}

const categoryFilterMap: Record<string, CategoryFilter> = {
  'recitales':            { types: ['concert'], tags: ['concert', 'music', 'rock', 'pop', 'ska', 'metal', 'tribute'] },
  'deportes':             { types: ['race', 'sports'], tags: ['sports', 'running', 'marathon', 'deporte'] },
  'infantiles':           { tags: ['infantil'] },
  'para-la-familia':      { tags: ['familia', 'infantil', 'kids'] },
  'fiestas-disco':        { tags: ['fiesta', 'fiesta', 'reggaeton', 'trap', 'música urbana'] },
  'teatro':               { types: ['other'], tags: ['teatro', 'theater', 'obra', 'musical'] },
  'stand-up':             { tags: ['stand-up', 'comedia', 'humor'] },
  'festivales':           { types: ['festival'], tags: ['festival'] },
  'exposiciones':         { tags: ['exposición', 'feria', 'expo'] },
  'gastronomia':          { tags: ['gastronomía', 'food', 'wine', 'cata'] },
  'conferencias':         { types: ['conference'], tags: ['conferencia', 'charla', 'keynote'] },
  'cultural':             { tags: ['cultural', 'arte', 'cultura'] },
  'folklore':             { tags: ['folklore', 'folclore', 'tango', 'música argentina'] },
  'gaming-y-esports':     { tags: ['gaming', 'esports', 'videojuegos'] },
  'workshops-y-talleres': { types: ['workshop'], tags: ['workshop', 'taller', 'curso'] },
  'cine-y-autocine':      { tags: ['cine', 'película', 'film', 'autocine'] },
  'aire-libre-y-aventura':{ tags: ['outdoor', 'aventura', 'aire libre', 'naturaleza'] },
  'moda-y-diseño':        { tags: ['moda', 'diseño', 'fashion'] },
  'tecnologia-y-ciencia': { tags: ['tecnología', 'ciencia', 'tech', 'innovación'] },
  'vinos-y-catas':        { tags: ['vinos', 'cata', 'wine', 'sommelier'] },
};

export const mockCategories: Category[] = [
  {
    id: 'deportes',
    title: 'Deportes',
    imageUrl: '/images/Explore Sports.png'
  },
  {
    id: 'teatro',
    title: 'Teatro',
    imageUrl: '/images/Explore Theaters.png'
  },
  {
    id: 'recitales',
    title: 'Recitales',
    imageUrl: '/images/Explore Concerts.png'
  },
  {
    id: 'stand-up',
    title: 'Stand Up',
    imageUrl: '/images/Explore Stand Up.png'
  },
  {
    id: 'festivales',
    title: 'Festivales',
    imageUrl: '/images/Explore Festivals.png'
  },
  {
    id: 'infantiles',
    title: 'Infantiles',
    imageUrl: '/images/Explore Kids.png'
  },
  {
    id: 'exposiciones',
    title: 'Ferias y Exposiciones',
    imageUrl: '/images/Explore Trade Shows and Exhibitions.png'
  },
  {
    id: 'gastronomia',
    title: 'Gastronomía',
    imageUrl: '/images/Explore Gastronomy.png'
  },
  {
    id: 'conferencias',
    title: 'Conferencias',
    imageUrl: '/images/Explore Conferences.png'
  },
  {
    id: 'cultural',
    title: 'Cultural',
    imageUrl: '/images/Explore Cultural.png'
  },
  {
    id: 'folklore',
    title: 'Folklore',
    imageUrl: '/images/Explore Folklore.png'
  },
  {
    id: 'para-la-familia',
    title: 'Para la Familia',
    imageUrl: '/images/Explore For the family.png'
  },
  {
    id: 'fiestas-disco',
    title: 'Fiestas y Disco',
    imageUrl: '/images/Explore Parties - Disco.png'
  },
  {
    id: 'bienestar-y-salud',
    title: 'Bienestar y Salud',
    imageUrl: '/images/Explore Wellness and Health.png'
  },
  {
    id: 'gaming-y-esports',
    title: 'Gaming y eSports',
    imageUrl: '/images/Explore Gaming.png'
  },
  {
    id: 'workshops-y-talleres',
    title: 'Workshops y Talleres',
    imageUrl: '/images/Explore Workshops.png'
  },
  {
    id: 'cine-y-autocine',
    title: 'Cine y Autocine',
    imageUrl: '/images/Explore Cinema.png'
  },
  {
    id: 'aire-libre-y-aventura',
    title: 'Aire Libre y Aventura',
    imageUrl: '/images/Explore Outdoor and Adventure.png'
  },
  {
    id: 'moda-y-diseño',
    title: 'Moda y Diseño',
    imageUrl: '/images/Explore Fashion and Design.png'
  },
  {
    id: 'tecnologia-y-ciencia',
    title: 'Tecnología y Ciencia',
    imageUrl: '/images/Explore Tech and Science.png'
  },
  {
    id: 'vinos-y-catas',
    title: 'Vinos y Catas',
    imageUrl: '/images/Explore Wine Tasting.png'
  }
];

export function getCategoryById(id: string): Category | undefined {
  return mockCategories.find(cat => cat.id === id);
}

export function getAllCategories(): Category[] {
  return mockCategories;
}

/**
 * Filtra eventos del mock por categoría.
 * TODO: reemplazar por llamada al endpoint GET /events?category={id}
 */
export function getEventsByCategory(categoryId: string, events: Event[]): Event[] {
  const filter = categoryFilterMap[categoryId];
  if (!filter) return [];

  return events.filter((event) => {
    const typeMatch = filter.types?.includes(event.type) ?? false;
    const tagMatch = filter.tags?.some(tag =>
      event.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    ) ?? false;
    return typeMatch || tagMatch;
  });
}

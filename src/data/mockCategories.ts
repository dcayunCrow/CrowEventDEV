export interface Category {
  id: string;
  title: string;
  imageUrl: string;
}

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

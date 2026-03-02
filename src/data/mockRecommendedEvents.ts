// ==========================================
// Recommended Events Types & Mock Data
// ==========================================

export interface RecommendedEvent {
  _id: string;
  title: string;
  media: {
    imgs: string[];
    videos: string[];
    url: string;
  };
  detail: {
    venue?: string;
    address?: string;
  };
  schedule: {
    date_start: string; // ISO Date string
  };
}

export interface RecommendedEventsList {
  title: string;
  events: RecommendedEvent[];
}

// ==========================================
// Mock Data
// ==========================================

export const mockRecommendedEvents: RecommendedEventsList[] = [
  {
    title: "Lo más buscado",
    events: [
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d1",
        title: "God Save The Queen",
        media: {
          imgs: [
            "https://qualitycenter.com/wp-content/uploads/2025/12/960x400-1-1.jpg"
          ],
          videos: [],
          url: "https://qualitycenter.com/shows/god-save-the-queen/"
        },
        detail: {
          venue: "Quality Arena",
          address: "Avenida Cruz Roja Argentina 200, Córdoba"
        },
        schedule: {
          date_start: "2026-04-19T23:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d2",
        title: "Divididos en Vivo",
        media: {
          imgs: [
            "https://example.com/divididos.jpg"
          ],
          videos: [],
          url: "https://example.com/divididos"
        },
        detail: {
          venue: "Estadio Kempes",
          address: "Av. Cárcano s/n, Córdoba"
        },
        schedule: {
          date_start: "2026-05-15T22:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d3",
        title: "Coldplay - Music of the Spheres",
        media: {
          imgs: [
            "https://example.com/coldplay.jpg"
          ],
          videos: [],
          url: "https://example.com/coldplay"
        },
        detail: {
          venue: "Estadio Mario Alberto Kempes",
          address: "Av. Cárcano s/n, Córdoba"
        },
        schedule: {
          date_start: "2026-06-20T21:00:00.000Z"
        }
      }
    ]
  },
  {
    title: "Creemos que estos te van a encantar",
    events: [
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d2",
        title: "Guerreras Doradas",
        media: {
          imgs: [
            "https://qualitycenter.com/wp-content/uploads/2025/12/960x400_Guerreras.jpg"
          ],
          videos: [],
          url: "https://qualitycenter.com/shows/guerreras-doradas/"
        },
        detail: {
          venue: "Quality Lab",
          address: "Avenida Cruz Roja Argentina 200, Córdoba"
        },
        schedule: {
          date_start: "2026-02-06T22:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d3",
        title: "Ricardo Montaner",
        media: {
          imgs: [
            "https://prod-cms-static.ticketek.com.ar/sites/default/files/images/show-header/rm_s.png"
          ],
          videos: [],
          url: "https://qualitycenter.com/shows/ricardo-montaner/"
        },
        detail: {
          venue: "Estadio Instituto",
          address: "Jujuy 2602, Córdoba"
        },
        schedule: {
          date_start: "2026-03-02T00:30:00.000Z"
        }
      },
      {
        _id: "5a9427648b0beebeb6957a4b",
        title: "8va Maratón de Córdoba",
        media: {
          imgs: [],
          videos: [],
          url: "www.maratoncordoba.com"
        },
        detail: {
          venue: "Estadio Kempes",
          address: "Av. Cárcano s/n, Córdoba"
        },
        schedule: {
          date_start: "2025-09-21T09:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d4",
        title: "Chayanne",
        media: {
          imgs: [
            "https://qualitycenter.com/wp-content/uploads/2025/12/VENTA11mar_960x400-1.jpg"
          ],
          videos: [],
          url: "https://qualitycenter.com/shows/chayanne/"
        },
        detail: {
          venue: "Estadio Instituto",
          address: "Jujuy 2602, Córdoba"
        },
        schedule: {
          date_start: "2026-03-12T00:30:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d5",
        title: "Bad Bunny Fest",
        media: {
          imgs: [
            "https://imagenes.alpogo.com/eventos/alta_evento_1770076820_69813a94483a5.jpg"
          ],
          videos: [],
          url: "https://alpogo.com/evento/flema-en-salon-pueyrredon-24187"
        },
        detail: {
          venue: "Zen Disco",
          address: "Julio A. Roca 730, Córdoba"
        },
        schedule: {
          date_start: "2026-02-28T02:00:00.000Z"
        }
      }
    ]
  },
  {
    title: "Favoritos del público",
    events: [
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d7",
        title: "Rodrigo Tapari - Show Tributo",
        media: {
          imgs: [
            "https://example.com/tapari.jpg"
          ],
          videos: [],
          url: "https://example.com/tapari"
        },
        detail: {
          venue: "Quality Espacio",
          address: "Av. Recta Martinoli 7955, Córdoba"
        },
        schedule: {
          date_start: "2026-05-01T22:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d8",
        title: "Q' Lokura en concierto",
        media: {
          imgs: [
            "https://example.com/qlokura.jpg"
          ],
          videos: [],
          url: "https://example.com/qlokura"
        },
        detail: {
          venue: "Complejo Forja",
          address: "Av. Recta Martinoli 8989, Córdoba"
        },
        schedule: {
          date_start: "2026-04-25T23:30:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0d9",
        title: "Los Caligaris - Fiesta Caliguera",
        media: {
          imgs: [
            "https://example.com/caligaris.jpg"
          ],
          videos: [],
          url: "https://example.com/caligaris"
        },
        detail: {
          venue: "Club Hípico",
          address: "Av. Richieri 2502, Córdoba"
        },
        schedule: {
          date_start: "2026-03-20T22:00:00.000Z"
        }
      }
    ]
  },
  {
    title: "Cuarteto",
    events: [
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e1",
        title: "La Mona Jiménez - Baile de Primavera",
        media: {
          imgs: [
            "https://example.com/la-mona.jpg"
          ],
          videos: [],
          url: "https://example.com/la-mona"
        },
        detail: {
          venue: "Estadio Mundialista",
          address: "Av. Cárcano s/n, Córdoba"
        },
        schedule: {
          date_start: "2026-09-21T22:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e2",
        title: "La Konga - Fiesta de la Cerveza",
        media: {
          imgs: [
            "https://example.com/lakonga2.jpg"
          ],
          videos: [],
          url: "https://example.com/lakonga2"
        },
        detail: {
          venue: "Complejo Forja",
          address: "Av. Recta Martinoli 8989, Córdoba"
        },
        schedule: {
          date_start: "2026-10-12T23:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e3",
        title: "Q' Lokura y La Barra - Súper Baile",
        media: {
          imgs: [
            "https://example.com/super-baile.jpg"
          ],
          videos: [],
          url: "https://example.com/super-baile"
        },
        detail: {
          venue: "Orfeo Superdomo",
          address: "Av. Cárcano 4750, Córdoba"
        },
        schedule: {
          date_start: "2026-08-14T22:30:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e4",
        title: "Banda XXI - 30 Años",
        media: {
          imgs: [
            "https://example.com/banda-xxi.jpg"
          ],
          videos: [],
          url: "https://example.com/banda-xxi"
        },
        detail: {
          venue: "Quality Arena",
          address: "Avenida Cruz Roja Argentina 200, Córdoba"
        },
        schedule: {
          date_start: "2026-07-25T23:00:00.000Z"
        }
      }
    ]
  },
  {
    title: "Teatro",
    events: [
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e5",
        title: "El Rey León - Musical",
        media: {
          imgs: [
            "https://example.com/rey-leon.jpg"
          ],
          videos: [],
          url: "https://example.com/rey-leon"
        },
        detail: {
          venue: "Teatro del Libertador",
          address: "Av. Vélez Sarsfield 365, Córdoba"
        },
        schedule: {
          date_start: "2026-05-05T20:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e6",
        title: "Una noche de comedia - Enrique Pinti",
        media: {
          imgs: [
            "https://example.com/pinti.jpg"
          ],
          videos: [],
          url: "https://example.com/pinti"
        },
        detail: {
          venue: "Teatro Real",
          address: "San Jerónimo 66, Córdoba"
        },
        schedule: {
          date_start: "2026-06-12T21:00:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e7",
        title: "Toc Toc - Obra teatral",
        media: {
          imgs: [
            "https://example.com/toc-toc.jpg"
          ],
          videos: [],
          url: "https://example.com/toc-toc"
        },
        detail: {
          venue: "Teatro del Libertador",
          address: "Av. Vélez Sarsfield 365, Córdoba"
        },
        schedule: {
          date_start: "2026-04-18T20:30:00.000Z"
        }
      },
      {
        _id: "65f1a2b3c4d5e6f7a8b9c0e8",
        title: "Las brujas de Salem",
        media: {
          imgs: [
            "https://example.com/brujas-salem.jpg"
          ],
          videos: [],
          url: "https://example.com/brujas-salem"
        },
        detail: {
          venue: "Teatro del Sol",
          address: "Boulevard San Juan 49, Córdoba"
        },
        schedule: {
          date_start: "2026-07-03T21:00:00.000Z"
        }
      }
    ]
  }
];

// ==========================================
// Helper Functions
// ==========================================

/**
 * Obtiene todas las listas de eventos recomendados
 */
export const getRecommendedLists = (): RecommendedEventsList[] => {
  return mockRecommendedEvents;
};

/**
 * Obtiene una lista específica por su título
 */
export const getRecommendedListByTitle = (title: string): RecommendedEventsList | undefined => {
  return mockRecommendedEvents.find(list => list.title === title);
};

/**
 * Obtiene todos los eventos recomendados en un solo array
 */
export const getAllRecommendedEvents = (): RecommendedEvent[] => {
  return mockRecommendedEvents.flatMap(list => list.events);
};

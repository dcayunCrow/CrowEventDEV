import { Event } from '@/types/event';

export const mockEvents: Event[] = [
  {
    _id: "65f1a2b3c4d5e6f7a8b9c0d1",
    is_active: true,
    is_verified: true,
    views: 1543,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "God Save The Queen",
    subtitle: "La banda tributo a Queen más importante del mundo",
    media: {
      imgs: [
        "https://qualitycenter.com/wp-content/uploads/2025/12/960x400-1-1.jpg"
      ],
      videos: ['https://www.youtube.com/watch?v=CuHAa0ChhdM'],
      url: "https://qualitycenter.com/shows/god-save-the-queen/"
    },
    description: "La banda tributo a Queen más importante del mundo regresa a Argentina con un show inolvidable. God Save The Queen, reconocida por la crítica internacional como la recreación más fiel del mítico grupo liderado por Freddie Mercury. Con una puesta en escena arrolladora, más de dos décadas recorriendo el planeta, God Save The Queen ha llevado los grandes clásicos de Queen —como Bohemian Rhapsody, We Will Rock You, Radio Ga Ga o Somebody to Love—a millones de personas en todo el mundo.",
    tags: ["concert", "queen", "tribute", "music", "rock"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c111",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-04-19T23:00:00.000Z", // 20:00 hs Argentina
      date_end: "2026-04-20T02:00:00.000Z"    // ~3h de show
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 85000, // Precio más alto (zona Rojo)
      url: "https://www.ticketek.com.ar/dios-salve-la-reina/quality-arena",
      contact: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2026-01-15T00:00:00.000Z",
        date_end: "2026-04-19T23:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      }
    },
    detail: {
      venue: "Quality Arena",
      address: "Avenida Cruz Roja Argentina 200, Córdoba",
      capacity: 5000,
      precio_zonas: {
        rojo: 85000,
        naranja: 80000,
        amarillo: 70000,
        verde: 60000,
        celeste: 50000,
        azul: 45000,
        gris: 40000
      }
    },
    date_created: "2025-12-10T10:00:00.000Z",
    last_updated: "2026-01-15T14:30:00.000Z"
  },
  {
    _id: "5a9427648b0beebeb6957a4b",
    is_active: true,
    is_verified: true,
    views: 654,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "race",
    title: "8va Maratón de Córdoba",
    subtitle: "¡Maratón acordonarse!",
    media: {
      imgs: [],
      videos: [
        "https://example.com/video1.mp4"
      ],
      url: "www.maratoncordoba.com"
    },
    description: "Vení a realizar deporte, llévate nuestra remera y nuestra medalla finisher.",
    tags: ["sports", "running", "marathon"],
    owner_id: "6a9427648b0beebeb6957b5c",
    parent_id: "6a9427548b0beebeb6957b5c",
    location_id: "5a9427648b0beebeb6957c8d",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2025-09-21T09:00:00.000Z",
      date_end: "2025-09-21T12:00:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 25000.00,
      url: "https://www.eventbrite.com.ar/e/8va-maraton-de-cordoba-tickets",
      contact: {
        phone: "+54 351 434-8360",
        email: "info@kempes.com",
        website: "www.kempes.com",
        name: "Administración Estadio Kempes",
        img: "https://example.com/logo_kempes.png",
        social: {
          instagram: "estadiokempesok",
          facebook: "EstadioKempesOficial",
          pinterest: "pinterest",
          x: "estadiokempesok"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2025-06-01T00:00:00.000Z",
        date_end: "2025-09-21T09:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 351 434-8360",
        email: "info@kempes.com",
        website: "www.kempes.com",
        name: "Administración Estadio Kempes",
        img: "https://example.com/logo_kempes.png",
        social: {
          instagram: "estadiokempesok",
          facebook: "EstadioKempesOficial",
          pinterest: "pinterest",
          x: "estadiokempesok"
        }
      }
    },
    detail: {
      distance: 42,
      unit: "Km",
      laps: 1
    },
    date_created: "2024-05-20T10:00:00.000Z",
    last_updated: "2024-05-20T11:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9c0d2",
    is_active: true,
    is_verified: true,
    views: 892,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Guerreras Doradas",
    subtitle: "Show infantil lleno de música, magia y valentía",
    media: {
      imgs: [
        "https://qualitycenter.com/wp-content/uploads/2025/12/960x400_Guerreras.jpg"
      ],
      videos: [],
      url: "https://qualitycenter.com/shows/guerreras-doradas/"
    },
    description: "Este verano no te podés perder este suceso. Todos los viernes de febrero podés ser parte de un show infantil lleno de música, magia y valentía. La oscuridad se expande y amenaza con apoderarse del mundo… pero tres chicas muy especiales fueron enviadas para protegernos. Tres jóvenes artistas descubren que no solo nacieron para brillar en los escenarios, sino también para defender la esperanza y la alegría de todos. Con coreografías cargadas de energía, canciones que hacen vibrar y amistades puestas a prueba, estas guerreras se enfrentarán a los enemigos de la luz con el poder de la música y la fuerza de sus voces unidas. Un espectáculo que demuestra que el verdadero poder está en creer en uno mismo.",
    tags: ["show", "infantil", "música", "familia", "entretenimiento"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c222",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-02-06T22:00:00.000Z", // 19:00 hs Argentina, viernes de febrero
      date_end: "2026-02-07T00:30:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 35000,
      url: "https://www.ticketek.com.ar/guerreras-doradas/quality-lab",
      contact: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2026-01-10T00:00:00.000Z",
        date_end: "2026-02-27T22:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      }
    },
    detail: {
      venue: "Quality LAB",
      address: "Avenida Cruz Roja Argentina 200, Córdoba",
      price_zones: {
        rojo: 35000,
        naranja: 30000,
        amarillo: 28000,
        verde: 25000
      }
    },
    date_created: "2025-12-15T10:00:00.000Z",
    last_updated: "2026-01-10T14:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9c0d3",
    is_active: true,
    is_verified: true,
    views: 2341,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Ricardo Montaner",
    subtitle: "El Último Regreso Tour 2026",
    media: {
      imgs: [
        "https://prod-cms-static.ticketek.com.ar/sites/default/files/images/show-header/rm_s.png"
      ],
      videos: [],
      url: "https://qualitycenter.com/shows/ricardo-montaner/"
    },
    description: "Tras más de 2 años alejado de los escenarios, Ricardo Montaner anunció su tan esperada gira mundial que promete ser inolvidable: 'El Último Regreso Tour 2026'. En Córdoba se presentará en el Estadio de Instituto el 1 de marzo de 2026. Con una trayectoria de más de 40 años, 25 álbumes de estudio y una extensa lista de éxitos que han marcado varias generaciones, Ricardo Montaner es una de las figuras más influyentes de la música latina. Su música ha vendido más de 60 millones de copias a nivel global y ha recibido innumerables premios como el Latin Grammy a la Excelencia musical.",
    tags: ["concert", "música latina", "ricardo montaner", "baladas", "romántico"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c333",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-03-02T00:30:00.000Z", // 21:30 hs Argentina
      date_end: "2026-03-02T03:30:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 250000,
      url: "https://www.ticketek.com.ar/ricardo-montaner/estadio-instituto-de-cordoba",
      contact: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2025-12-01T00:00:00.000Z",
        date_end: "2026-03-02T00:30:00.000Z"
      },
      beneficiary: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      }
    },
    detail: {
      venue: "Estadio Instituto",
      address: "Jujuy 2602, Córdoba",
      capacity: 30000,
      price_zones: {
        platea_rojo: 250000,
        platea_naranja: 180000,
        platea_amarillo: 160000,
        platea_verde: 140000,
        platea_celeste: 120000,
        platea_gris: 100000,
        platea_violeta: 80000,
        platea_central: 60000
      }
    },
    date_created: "2025-11-20T10:00:00.000Z",
    last_updated: "2025-12-01T14:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9c0d4",
    is_active: true,
    is_verified: true,
    views: 3128,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Chayanne",
    subtitle: "Bailemos Otra Vez Tour",
    media: {
      imgs: [
        "https://qualitycenter.com/wp-content/uploads/2025/12/VENTA11mar_960x400-1.jpg"
      ],
      videos: [],
      url: "https://qualitycenter.com/shows/chayanne/"
    },
    description: "Chayanne llega a Córdoba en el marco de su 'Bailemos Otra Vez Tour'. El 11 de marzo se presentará en Estadio Instituto, con producción de Fénix Entertainment, CMN y Quality Producciones. Tras agotar las entradas para sus shows en Estados Unidos y Canadá, el artista puertorriqueño llevará su esperado concierto por diversas ciudades latinoamericanas. Una gira que incluirá clásicos como 'Torero', 'Provócame', 'Un siglo sin tí' y 'Dejaría Todo', junto a nuevos éxitos como 'Bailando bachata', 'Como tú y yo' y 'Te amo y punto', con la intención de guiar a su público por un recorrido emocional a través de su música.",
    tags: ["concert", "chayanne", "pop latino", "música latina", "bailar"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c333",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-03-12T00:30:00.000Z", // 21:30 hs Argentina
      date_end: "2026-03-12T03:30:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 255000,
      url: "https://www.ticketek.com.ar/chayanne/estadio-instituto-de-cordoba",
      contact: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2025-12-10T00:00:00.000Z",
        date_end: "2026-03-12T00:30:00.000Z"
      },
      beneficiary: {
        phone: "+54 11 xxxx-xxxx",
        email: "info@qualitycenter.com",
        website: "www.qualitycenter.com",
        name: "Quality Center",
        img: "https://qualitycenter.com/wp-content/uploads/2025/12/logo-center-mas-chicoQ-1.png",
        social: {
          instagram: "qualitycenter_ar",
          facebook: "qualitycenter.ar",
          x: "qualitycenter_ar"
        }
      }
    },
    detail: {
      venue: "Estadio Instituto",
      address: "Jujuy 2602, Córdoba",
      capacity: 30000,
      price_zones: {
        platea_rojo: 255000,
        platea_naranja: 205000,
        platea_amarillo: 185000,
        platea_verde: 165000,
        platea_celeste: 145000,
        platea_gris: 135000,
        platea_violeta: 125000,
        platea_sucre: 115000,
        platea_jujuy: 115000,
        platea_central: 85000
      }
    },
    date_created: "2025-11-25T10:00:00.000Z",
    last_updated: "2025-12-10T14:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9c0d5",
    is_active: true,
    is_verified: true,
    views: 458,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Bad Bunny Fest",
    subtitle: "La fiesta más grande de Bad Bunny en Argentina",
    media: {
      imgs: [
        "https://imagenes.alpogo.com/eventos/alta_evento_1770076820_69813a94483a5.jpg"
      ],
      videos: ['https://www.youtube.com/watch?v=Cr8K88UcO0s&list=RDCr8K88UcO0s&start_radio=1'],
      url: "https://alpogo.com/evento/flema-en-salon-pueyrredon-24187"
    },
    description: "La fiesta mas grande de Bad Bunny en Argentina llega a Cordoba. Despues de mas de 15 ediciones en Buenos Aires desembarca la fiesta mas exclusiva de Bad Bunny, Noches iconicas de Benito con un 100% on set en toda su discografia. Nos preparamos para un Baile Inolvidable en el corazon de Cordoba. Te esperamos para una noche en donde te vamos a llevar por todas las eras de BAD BUNNY. Fiesta Fandom lo va hacer realidad junto a Bad Bunny Argentina.",
    tags: ["concert", "bad bunny", "reggaeton", "trap", "fiesta", "música urbana"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c444",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-02-28T02:00:00.000Z", // 23:00 hs Argentina del 27 de febrero
      date_end: "2026-02-28T08:00:00.000Z"    // 05:00 hs del 28 de febrero
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 15000,
      url: "https://alpogo.com/evento/flema-en-salon-pueyrredon-24187",
      contact: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@zendisco.com",
        website: "www.zendisco.com",
        name: "Zen Disco",
        img: "",
        social: {
          instagram: "zendisco_cba",
          facebook: "ZenDiscoCba"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2026-01-15T00:00:00.000Z",
        date_end: "2026-02-28T02:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@zendisco.com",
        website: "www.zendisco.com",
        name: "Zen Disco",
        img: "",
        social: {
          instagram: "zendisco_cba",
          facebook: "ZenDiscoCba"
        }
      }
    },
    detail: {
      venue: "Zen Disco",
      address: "Julio A. Roca 730, Córdoba",
      capacity: 800
    },
    date_created: "2026-01-20T10:00:00.000Z",
    last_updated: "2026-02-01T14:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9c0d6",
    is_active: true,
    is_verified: true,
    views: 1876,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Los Fabulosos Cadillacs",
    subtitle: "La Marcha del Golazo Solitario",
    media: {
      imgs: [
        "https://paseshow-img.s3.sa-east-1.amazonaws.com/imagenes/evento/2862.jpg"
      ],
      videos: [],
      url: ""
    },
    description: "Los Fabulosos Cadillacs regresan a Córdoba con su inconfundible sonido y energía. Una noche para disfrutar de los clásicos que marcaron generaciones.",
    tags: ["concert", "los fabulosos cadillacs", "ska", "rock latino", "música argentina"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c555",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-05-17T00:00:00.000Z", // 16 de mayo 2026, 21:00 hs Argentina
      date_end: "2026-05-17T03:00:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 150000,
      url: "",
      contact: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@evento.com",
        website: "",
        name: "Organizador",
        img: "",
        social: {}
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2026-02-01T00:00:00.000Z",
        date_end: "2026-05-17T00:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@evento.com",
        website: "",
        name: "Organizador",
        img: "",
        social: {}
      }
    },
    detail: {
      venue: "A definir",
      address: "Córdoba, Argentina",
      capacity: 0
    },
    date_created: "2026-02-01T10:00:00.000Z",
    last_updated: "2026-02-10T14:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9e001",
    is_active: true,
    is_verified: true,
    views: 3421,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Alejandro Sanz",
    subtitle: "Gira Sudamericana 2026",
    media: {
      imgs: [
        "https://cdn.getcrowder.com/images/fc8ca163-0666-4acc-abf9-3b0af1615b25-sanzcbadesktop.jpg",
        "https://cdn.getcrowder.com/images/77381068-f13a-496d-915d-549400b6a42a-640x640-1.png"
      ],
      videos: [],
      url: "https://www.edenentradas.ar/"
    },
    description: "Alejandro Sanz llega a Córdoba para brindar un show inolvidable en el que repasará todos sus grandes éxitos y presentará sus nuevos temas. Un encuentro imperdible con uno de los artistas latinos más reconocidos a nivel mundial.",
    tags: ["concert", "alejandro sanz", "pop", "romántico", "música latina"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c666",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-03-09T00:00:00.000Z",
      date_end: "2026-03-09T03:00:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 95000, 
      url: "https://www.edenentradas.ar/",
      contact: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@edenentradas.com.ar",
        website: "www.edenentradas.ar",
        name: "Eden Entradas",
        img: "",
        social: {
          instagram: "edenentradas"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2026-01-01T00:00:00.000Z",
        date_end: "2026-03-08T21:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@edenentradas.com.ar",
        website: "www.edenentradas.ar",
        name: "Eden Entradas",
        img: "",
        social: {
          instagram: "edenentradas"
        }
      }
    },
    detail: {
      venue: "Estadio Mario A. Kempes",
      address: "Av. Cárcano s/n, Córdoba",
      capacity: 57000,
      price_zones: {
        vip: 95000,
        platea: 75000,
        campo: 65000
      }
    },
    date_created: "2026-02-01T10:00:00.000Z",
    last_updated: "2026-02-15T14:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9e002",
    is_active: true,
    is_verified: true,
    views: 2150,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Dream Theater",
    subtitle: "Tour Sudamericano",
    media: {
      imgs: [
        "https://cdn.getcrowder.com/images/7ed41a5f-1c5b-415f-9339-849d70eeef51-dteden-1920x7201.jpg",
        "https://cdn.getcrowder.com/images/12a08468-658f-446b-b534-ce1b4eeab719-dteden-640x640.png"
      ],
      videos: [],
      url: "https://www.edenentradas.ar/"
    },
    description: "La legendaria banda de metal progresivo, Dream Theater, regresa a la ciudad de Córdoba. Prometen un concierto épico lleno de virtuosismo técnico repasando sus discos clásicos y sus temas más recientes.",
    tags: ["concert", "dream theater", "metal", "progresivo", "rock"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c777",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-04-26T23:00:00.000Z",
      date_end: "2026-04-27T02:00:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 80000,
      url: "https://www.edenentradas.ar/",
      contact: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@edenentradas.com.ar",
        website: "www.edenentradas.ar",
        name: "Eden Entradas",
        img: "https://cdn.getcrowder.com/images/fae2a138-9ae8-4d77-b617-7a6d155a3366-edenlight.png?w=300",
        social: {
          instagram: "edenentradas"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2026-01-15T00:00:00.000Z",
        date_end: "2026-04-26T20:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@edenentradas.com.ar",
        website: "www.edenentradas.ar",
        name: "Eden Entradas",
        img: "",
        social: {
          instagram: "edenentradas"
        }
      }
    },
    detail: {
      venue: "Plaza de la Música",
      address: "Int. Ramón Bautista Mestre 1129, Córdoba",
      capacity: 6000,
      price_zones: {
        platea: 80000,
        campo: 60000
      }
    },
    date_created: "2026-02-10T10:00:00.000Z",
    last_updated: "2026-02-15T14:30:00.000Z"
  },
  {
    _id: "65f1a2b3c4d5e6f7a8b9e003",
    is_active: true,
    is_verified: true,
    views: 1890,
    scope: "PUBLIC",
    status: "APPROVED",
    status_reason: "APPROVED",
    type: "concert",
    title: "Robert Plant",
    subtitle: "El ícono de la música en vivo",
    media: {
      imgs: [
         "https://cdn.getcrowder.com/images/bce5322b-ecf4-4a8f-a5b0-d58f8808e1b1-robertplant-cordoba-anuncio-1920x720px-copia.jpg",
         "https://cdn.getcrowder.com/images/4d4df104-2491-4089-a7e0-8279c2bf45d8-robertplant-cordoba-anuncio-640x640-px.png?w=360"
      ],
      videos: [],
      url: "https://www.edenentradas.ar/"
    },
    description: "Una leyenda viva del rock mundial se presenta en Córdoba. Robert Plant, el histórico cantante de Led Zeppelin, brindará un show íntimo y potente recorriendo las grandes joyas de su carrera.",
    tags: ["concert", "robert plant", "rock", "led zeppelin", "leyenda"],
    owner_id: "65f1a2b3c4d5e6f7a8b9c000",
    location_id: "65f1a2b3c4d5e6f7a8b9c888",
    schedule: {
      timezone: "America/Argentina/Buenos_Aires",
      date_start: "2026-05-14T23:00:00.000Z",
      date_end: "2026-05-15T02:00:00.000Z"
    },
    ticket: {
      access: "PAID",
      currency: "ARS",
      amount: 110000,
      url: "https://www.edenentradas.ar/",
      contact: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@edenentradas.com.ar",
        website: "www.edenentradas.ar",
        name: "Eden Entradas",
        img: "https://cdn.getcrowder.com/images/fae2a138-9ae8-4d77-b617-7a6d155a3366-edenlight.png?w=300",
        social: {
          instagram: "edenentradas"
        }
      },
      availability: {
        timezone: "America/Argentina/Buenos_Aires",
        date_start: "2026-02-01T00:00:00.000Z",
        date_end: "2026-05-14T20:00:00.000Z"
      },
      beneficiary: {
        phone: "+54 351 xxxx-xxxx",
        email: "info@edenentradas.com.ar",
        website: "www.edenentradas.ar",
        name: "Eden Entradas",
        img: "https://cdn.getcrowder.com/images/fae2a138-9ae8-4d77-b617-7a6d155a3366-edenlight.png?w=300",
        social: {
          instagram: "edenentradas"
        }
      }
    },
    detail: {
      venue: "Plaza de la Música",
      address: "Int. Ramón Bautista Mestre 1129, Córdoba",
      capacity: 6000,
      price_zones: {
        platea_preferencial: 110000,
        campo_vip: 90000,
        campo: 70000
      }
    },
    date_created: "2026-02-15T10:00:00.000Z",
    last_updated: "2026-02-20T14:30:00.000Z"
  }
];

// Helper para buscar evento por ID
export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event._id === id);
};

// Helper para filtrar eventos activos
export const getActiveEvents = (): Event[] => {
  return mockEvents.filter(event => event.is_active && event.status === 'APPROVED');
};

// Helper para filtrar eventos por tipo
export const getEventsByType = (type: Event['type']): Event[] => {
  return mockEvents.filter(event => event.type === type);
};

// Helper para filtrar eventos por tags
export const getEventsByTag = (tag: string): Event[] => {
  return mockEvents.filter(event => event.tags.includes(tag));
};

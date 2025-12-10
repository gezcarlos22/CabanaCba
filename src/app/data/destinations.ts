import { DestinationData } from '@/app/types/destinationdata'

export const destinationsData: DestinationData[] = [
  {
    id: 'villa-dolores',
    name: 'Villa Dolores',
    description: 'Compras, Historia y el Polo Comercial',
    heroImage: '/images/destinations/villa-dolores-hero.jpg',
    heroVideo: '/images/hero/video_cabaña.mp4',
    gallery: [
  { src: '/images/team/team.webp', alt: "Descripción imagen 1" },
  { src: '/images/team/team.webp', alt: "Descripción imagen 2" }
],
    highlights: [
      {
        title: 'Aguas Termales',
        description: 'Relájate en las famosas aguas termales naturales con propiedades curativas',
        icon: '/images/icons/thermal-water.svg'
      },
      {
        title: 'Paisajes Serranos',
        description: 'Disfruta de vistas panorámicas de las Sierras de Córdoba',
        icon: '/images/icons/mountain.svg'
      },
      {
        title: 'Gastronomía Local',
        description: 'Prueba los sabores auténticos de la cocina cordobesa',
        icon: '/images/icons/food.svg'
      }
    ],
    activities: [
      {
        name: 'Termas de Villa Dolores',
        description: 'Sumérgete en las aguas termales naturales y disfruta de sus beneficios terapéuticos',
        image: '/images/team/team.webp',
        duration: 'Evento',
        difficulty: 'Fácil',
        detailedDescription: 'Las Termas de Villa Dolores son reconocidas por sus propiedades curativas y relajantes. Con una temperatura constante de 38°C, estas aguas termales naturales contienen minerales beneficiosos para la piel y el sistema circulatorio. El complejo cuenta con piscinas al aire libre, servicios de spa y áreas de descanso rodeadas de naturaleza.',
        location: 'Termas de Villa Dolores, Villa Dolores, Córdoba, Argentina'
      },
      {
        name: 'Trekking Cerro Intihuasi',
        description: 'Caminata hasta la cima con vistas espectaculares del valle',
        image: '/images/team/team.webp',
        duration: '4-6 horas',
        difficulty: 'Moderado',
        detailedDescription: 'El Cerro Intihuasi ofrece una de las mejores experiencias de trekking en la región. El sendero bien marcado te lleva a través de bosques nativos y formaciones rocosas únicas. En la cima, a 1.950 metros de altura, podrás disfrutar de vistas panorámicas de 360 grados del Valle de Traslasierra. Se recomienda comenzar temprano y llevar suficiente agua.',
        location: 'Cerro Intihuasi, Villa Dolores, Córdoba, Argentina'
      }
    ],
    aboutSections: [
      {
        title: 'Comercio y Encanto Colonial',
        content: [
          "Villa Dolores es una parada esencial en el Valle de Traslasierra, destacándose como una de las áreas comerciales más importantes de la región sin perder su distintivo estilo colonial.",
          "La ciudad, ubicada a unos 170 kilómetros de Córdoba Capital, combina hermosos paisajes serranos con atractivos citadinos clave. El corazón de la localidad late en la Plaza General Bartolomé Mitre, un clásico punto de encuentro con su fuente luminosa y la majestuosa Basílica Nuestra Señora de los Dolores."
        ],
        image: '/images/dedicated/cabaña1.jpg'
      },
      {
        title: 'Parque y Tradición Popular',
        content: [
          'El Parque de la Vida es otro sitio imprescindible y muy convocante de Villa Dolores. Dentro de este gran espacio se encuentran importantes símbolos como el Paseo de la Independencia y el Monumento al Bicentenario.',
          'Además, es hogar de un Teatro Griego que cobra vida cada enero con el tradicional Festival Nacional de la Papa. El parque es un centro de actividad constante, con piletas municipales para el verano, zonas deportivas y la Feria Franca de Microemprendedores que exhibe gastronomía y artesanías locales los fines de semana.'
        ],
        image: '/images/dedicated/cabaña1.jpg'
      },
      {
        title: 'Naturaleza del Río Los Sauces',
        content: [
          'A muy corta distancia del sector urbano, la naturaleza ofrece refugios ideales a través del río Los Sauces. Sus balnearios son perfectos para un chapuzón o un día de descanso.',
          'Entre ellos, el Balneario Piedra Pintada es uno de los más visitados por sus aguas cristalinas y tranquilidad, ofreciendo servicios como proveeduría y asadores en temporada. Para quienes prefieren la aventura, es posible realizar caminatas, cabalgatas o ciclismo hasta el cercano Balneario Los Álamos.'
        ],
        image: '/images/dedicated/cabaña1.jpg'
      }
    ],
    videos: [
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k9xTygi8ll8?si=SL4_26Luhasly0N0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'Villa Dolores - Vibra',
        description: 'Descubre la belleza natural de Villa Dolores'
      },
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k9xTygi8ll8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Termas Naturales',
        description: 'Relájate en las aguas termales curativas'
      },
    ],
    location: {
      address: 'Villa Dolores, Córdoba, Argentina'
    },
    bestTimeToVisit: 'Todo el año, especialmente de marzo a noviembre por el clima templado',
    tips: [
      'Lleva protector solar y sombrero para las caminatas',
      'Las termas están abiertas todo el año',
      'Reserva con anticipación en temporada alta',
      'Prueba las empanadas locales en el centro del pueblo'
    ]
  }
]
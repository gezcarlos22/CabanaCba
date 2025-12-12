import { DestinationData } from '@/app/types/destinationdata'

export const destinationsData: DestinationData[] = [
  {
    id: 'villa-dolores',
    name: 'Villa Dolores',
    description: 'Compras, Historia y el Polo Comercial',
    heroImage: '/images/destinations/villa-dolores-hero.jpg',
    heroVideo: '/videos/villa-dolores.mp4',
    gallery: [
      { src: '/images/destination/villa-dolores/villa-dolores-2.jpg', alt: "Ingreso Villa Dolores" },
      { src: '/images/destination/villa-dolores/basilica-2.jpg', alt: "Basilica Villa Dolores" },
      { src: '/images/destination/villa-dolores/municipalidad.webp', alt: "Municipalidad Villa Dolores" },
      { src: '/images/destination/villa-dolores/terminal.jpg', alt: "Terminal Villa Dolores" },
      { src: '/images/destination/villa-dolores/oreja-2.jpg', alt: "Rio Los Sauces" },
      { src: '/images/destination/villa-dolores/rio-2.jpg', alt: "Rio Los Sauces" },
      { src: '/images/destination/villa-dolores/rio-3.jpg', alt: "Rio Los Sauces" },
      { src: '/images/destination/villa-dolores/plaza.jpg', alt: "Plaza Mitre" },
      { src: '/images/destination/villa-dolores/parque.jpg', alt: "Parque" }
    ],
    highlights: [
    ],
    activities: [
      {
        name: 'Festival Nacional de la Papa',
        description: 'Del 7 al 12 de enero, Villa Dolores tendrá una programación de primera categoría. Seis noches para disfrutar, cantar y celebrar en nuestro Teatro Griego y Plaza Mitre, con artistas que hacen historia.',
        image: '/images/destination/villa-dolores/activities/festival-2.jpg',
        duration: 'Evento',
        difficulty: 'Fácil',
        detailedDescription: '¡Villa Dolores se prepara una vez más para ser el epicentro artístico y turístico del oeste cordobés! Sean todos bienvenidos a esta nueva edición del Festival Nacional de la Papa, una celebración cargada de música, baile y tradición. La grilla de artistas garantiza noches inolvidables: el MIÉRCOLES 7 la apertura es a puro cuarteto con la LBC y Euge Quevedo. El JUEVES 8 es la noche de clásicos con la llegada de Abel Pintos, además de las actuaciones de Tranka Style y Grupo Sentires. El SÁBADO 10, el escenario mayor de Traslasierra recibe a Soledad, la voz más emblemática del folklore argentino, junto a Sabor Canela y Juan Zamora. El gran cierre, el LUNES 12, será a puro baile con la energía de Q’ Lokura. Además, el festival ofrece eventos especiales con entrada libre y gratuita: el VIERNES 9 se realizará por primera vez La Peña del Festival en el Teatro Griego, con la presentación de La Terna, Nadia Pereyra, Santiago Simón y La Fórmula. Y el DOMINGO 11, la Plaza Mitre será el escenario de una gran noche de música y baile con Dani Guardia, Gabi Oviedo y Caro Arrieta.',
        location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3385.419848540087!2d-65.181992!3d-31.949504799999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd4a46749f58d%3A0xc24958fcee8ab810!2sTeatro%20Griego!5e0!3m2!1ses!2sar!4v1765411418599!5m2!1ses!2sar"
      },
      {
        name: 'Paseo la Vieja Bodega',
        description: 'Es la mixtura perfecta de historia, gastronomía local y cultura. Un punto de encuentro ideal para disfrutar de visitas guiadas, eventos y muestras artísticas en Villa Dolores.',
        image: '/images/destination/villa-dolores/activities/la-vieja-bodga-2.jpg',
        duration: 'Paseo',
        difficulty: 'Moderado',
        detailedDescription: 'Paseo la Vieja Bodega es la mixtura de historia, gastronomía y cultura. Es tu punto de llegada y de encuentro con las producciones locales y gastronomía que te hará conocer Villa Dolores desde sus raíces. Podrás Disfrutar de  visitas guiadas, eventos culturales y muestras artísticas .',
        location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3385.20690976402!2d-65.187983!3d-31.955283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd536c2b986b5%3A0x787dbd64f9eb737!2sEstaci%C3%B3n%20Terminal%20de%20%C3%93mnibus%20y%20Paseo%20La%20Vieja%20Bodega!5e0!3m2!1ses!2sar!4v1765411161742!5m2!1ses!2sar"
      },
      {
        name: 'La Feria Franca',
        description: 'Evento tradicional de microemprendedores, artesanías y gastronomía local que se realiza en el antiguo predio del ferrocarriL.',
        image: '/images/destination/villa-dolores/activities/franca.webp',
        duration: 'Cultural',
        difficulty: 'Moderado',
        detailedDescription: 'Ofreciendo productos caseros y regionales, y a veces se celebra en la Plazoleta Belgrano, siendo una actividad gratuita y popular para disfrutar en familia los fines de semana. La fecha y lugar exactos pueden variar, pero se publicitan en las redes de la Municipalidad de Villa Dolores, como el ex predio ferroviario.',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.466852433168!2d-65.1699908!3d-31.9482292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd4a379da33b3%3A0xaea4147e46a8f184!2sFeria%20Franca%20Villa%20Dolores!5e0!3m2!1ses-419!2sar!4v1765412291983!5m2!1ses-419!2sar",
      }
    ],
    aboutSections: [
      {
        title: 'Comercio y Encanto Colonial',
        content: [
          "Villa Dolores es una parada esencial en el Valle de Traslasierra, destacándose como una de las áreas comerciales más importantes de la región sin perder su distintivo estilo colonial.",
          "La ciudad, ubicada a unos 170 kilómetros de Córdoba Capital, combina hermosos paisajes serranos con atractivos citadinos clave. El corazón de la localidad late en la Plaza General Bartolomé Mitre, un clásico punto de encuentro con su fuente luminosa y la majestuosa Basílica Nuestra Señora de los Dolores."
        ],
        image: '/images/destination/villa-dolores/basilica.jpg'
      },
      {
        title: 'Parque y Tradición Popular',
        content: [
          'El Parque de la Vida es otro sitio imprescindible y muy convocante de Villa Dolores. Dentro de este gran espacio se encuentran importantes símbolos como el Paseo de la Independencia y el Monumento al Bicentenario.',
          'Además, es hogar de un Teatro Griego que cobra vida cada enero con el tradicional Festival Nacional de la Papa. El parque es un centro de actividad constante, con piletas municipales para el verano, zonas deportivas y la Feria Franca de Microemprendedores que exhibe gastronomía y artesanías locales los fines de semana.'
        ],
        image: '/images/destination/villa-dolores/parque-de-la-vidaa.jpg'
      },
      {
        title: 'Naturaleza del Río Los Sauces',
        content: [
          'A muy corta distancia del sector urbano, la naturaleza ofrece refugios ideales a través del río Los Sauces. Sus balnearios son perfectos para un chapuzón o un día de descanso.',
          'Entre ellos, el Balneario Piedra Pintada es uno de los más visitados por sus aguas cristalinas y tranquilidad, ofreciendo servicios como proveeduría y asadores en temporada. Para quienes prefieren la aventura, es posible realizar caminatas, cabalgatas o ciclismo hasta el cercano Balneario Los Álamos.'
        ],
        image: '/images/destination/villa-dolores/oreja.jpg'
      }
    ],
    videos: [
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k9xTygi8ll8?si=SL4_26Luhasly0N0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'Villa Dolores - Vibra',
        description: 'Descubre la belleza natural de Villa Dolores'
      },
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aWa7yTd4O9E?si=aVsUC_q8zcdgX8XN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'UN PASEO por VILLA DOLORES | VALLE de TRASLASIERRA',
        description: 'Visitamos Villa Dolores en el Valle de Traslasierra, una ciudad que aun conserva una vida de un pueblo, un lugar muy tranquilo para disfrutar, descansar y conectarse con la naturaleza!'
      },
    ],
    location: {
      address: 'Villa Dolores, Córdoba, Argentina',
      scr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27083.310648525836!2d-65.18782425!3d-31.9496681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd36012ebb0e1%3A0x3a4d4e674f9e51c4!2sVilla%20Dolores%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1765382945048!5m2!1ses-419!2sar"
    },
    bestTimeToVisit: 'Todo el año, especialmente de noviembre a marzo por las vacaciones de verano',
    tips: [
      'Lleva protector solar y sombrero para las caminatas',
      'Las termas están abiertas todo el año',
      'Reserva con anticipación en temporada alta',
      'Prueba las empanadas locales en el centro del pueblo'
    ],
    telefono: '+54 9 3544 408841',
    email: 'turismo.villadolores@gmail.com',
    instagram: 'https://www.instagram.com/municipalidadvilladolores/',
    web: 'https://www.villadolores.gov.ar'
  },
  {
    id: 'mina-clavero',
    name: 'Mina Clavero',
    description: 'Centro de la Aventura y sus Playas de Río',
    heroImage: '/images/destinations/villa-dolores-hero.jpg',
    heroVideo: '/videos/mina-clavero.mp4',
    gallery: [
      { src: '/images/destination/mina-clavero/ciudad.jpg', alt: "Ciudad Mina Clavero" },
      { src: '/images/destination/mina-clavero/rio-3.png', alt: "Rio Mina Clavero" },
      { src: '/images/destination/mina-clavero/rio-4.jpg', alt: "Rio Mina Clavero" },
      { src: '/images/destination/mina-clavero/casino.jpg', alt: "Casino Mina Clavero" },
      { src: '/images/destination/mina-clavero/ciclismo.jpg', alt: "Ciclismo Mina Clavero" },
      { src: '/images/destination/mina-clavero/parapente.jpg', alt: "Parapente en Mina Clavero" },
      { src: '/images/destination/mina-clavero/caminata.jpg', alt: "Caminata Mina Clavero" },
      { src: '/images/destination/mina-clavero/rio.jpg', alt: "Rio Mina Clavero" },
      { src: '/images/destination/mina-clavero/cultura.jpg', alt: "Cultura Mina Clavero" }
    ],
    highlights: [
    ],
    activities: [
      {
        name: 'Turismo Regional',
        description: 'El Valle de Traslasierra es un punto de partida ideal para desafiar la naturaleza y visitar icónicos destinos como el Cerro Champaquí, Los Túneles y la Quebrada del Condorito, todos altamente recomendables para una aventura completa.',
        image: '/images/destination/mina-clavero/activities/caminata.jpg',
        duration: 'Aventura',
        difficulty: 'Fácil',
        detailedDescription: 'El Cerro Champaquí, con sus impresionantes 2790 metros, es el coloso de piedra y el punto más alto de Córdoba, imponente en las Sierras Grandes. Aceptar este desafío te llevará a recorrer pampas de altura, arroyos, vertientes y paredes escarpadas. El ascenso, que demanda entre 8 a 10 horas, se puede realizar a pie o a caballo, siendo obligatorio ir acompañado de guías especializados. La recompensa en la cima es una vista increíble y la incomparable sensación de haber conquistado el pico. Desde Traslasierra, puedes iniciar la ruta desde localidades como Villa de Las Rosas, Los Hornillos o San Javier.',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217372.1247823768!2d-64.94540690000001!3d-31.6491949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d25d59048c4dd%3A0xa693b3400e45cb6c!2sMina%20Clavero%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1765465670445!5m2!1ses-419!2sar"
      },
      {
        name: 'Sendero Nido del Aguila',
        description: 'Es un recorrido cautivador en Mina Clavero que sigue el cauce del río homónimo, una de las 7 Maravillas Naturales de Argentina. Ofrece un paisaje variado que va desde playas serenas y arquitectura histórica hasta imponentes paredones de granito y piletas naturales de gran profundidad, favoritas de nadadores y clavadistas.',
        image: '/images/destination/mina-clavero/activities/nido.jpg',
        duration: 'Paseo',
        difficulty: 'Moderado',
        detailedDescription: "El sendero comienza frente al nuevo Casino y la Playa Central, siguiendo río arriba. El primer punto notable es el Balneario La Residencia, nombrado por el tradicional hotel de arquitectura ecléctica neoclásica (construido entre 1920 y 1935) que domina el paisaje. En este tramo, el río Mina Clavero es de mediana profundidad, con playas de arena fina. El destino final del recorrido es el Balneario Nido de Águila, donde el río se encajona dramáticamente entre paredones de granito de hasta 22 metros de altura. La erosión del agua ha creado piletas naturales que superan los 7 metros de profundidad, atrayendo a clavadistas y nadadores profesionales.",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6787.362648375887!2d-65.00954747200011!3d-31.724599030191698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d25e08809d971%3A0x5f6f0f8496e7b559!2sSendero%20Nido%20Del%20%C3%81guila.!5e0!3m2!1ses-419!2sar!4v1765465973953!5m2!1ses-419!2sar",
      },
      {
        name: 'Casino Mina Clavero',
        description: 'La oferta de esparcimiento en Mina Clavero es completa y vibrante. Además de una rica cartelera cultural y gastronómica, la villa cuenta con un renovado Casino y diversas salas de juegos, teatros, cine y discotecas, asegurando diversión y entretenimiento para adultos y familias durante la noche, en todas las estaciones del año.',
        image: '/images/destination/mina-clavero/activities/casino.jpg',
        duration: 'Entretenimiento',
        difficulty: 'Moderado',
        detailedDescription: 'A la hora de buscar diversión y entretenimiento, Mina Clavero ofrece varias alternativas. El atractivo se centra en su renovado Casino, un punto clave para el esparcimiento adulto que complementa la diversa oferta de la ciudad. Junto a este, la villa dispone de salas de juegos infantiles y parques recreativos, asegurando que toda la familia encuentre una opción de diversión nocturna, sumándose a los teatros, cine y discotecas disponibles en el centro comercial.',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.6910260246646!2d-65.00400849008973!3d-31.72433407401331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d2677fd9136f1%3A0x51059ba9261e884c!2sCasino%20Provincial%20de%20Mina%20Clavero!5e0!3m2!1ses-419!2sar!4v1765466373730!5m2!1ses-419!2sar",
      }
    ],
    aboutSections: [
      {
        title: 'Corazón de Belleza Natural',
        content: [
          "Ubicada al pie de las Sierras Grandes, Mina Clavero es el centro urbano más importante y diverso del Valle de Traslasierra.",
          "El corazón de la ciudad está surcado por tres importantes ríos que crean numerosos balnearios naturales y extensas playas de aguas cristalinas, cobrando vida especialmente durante el verano. Rodeada de naturaleza única, ofrece a sus visitantes paisajes de ensueño."
        ],
        image: '/images/destination/mina-clavero/rio-2.jpg'
      },
      {
        title: 'Ciudad con Costumbres Serranas',
        content: [
          'Mina Clavero ha sabido modernizarse sin perder su esencia e identidad. La ciudad cuenta con una amplia oferta de teatros, museos, un renovado Casino y diversos espacios de encuentro.',
          'Sus calles mantienen vivas las costumbres serranas, atrayendo a artistas y artesanos. Pasear por las ferias de productos locales y disfrutar de la gastronomía típica son actividades preferidas de los turistas, quienes además encuentran servicios de alta calidad en hotelería y gastronomía.'
        ],
        image: '/images/destination/mina-clavero/teatro.jpg'
      },
      {
        title: 'Grandes Eventos',
        content: [
          'Mina Clavero es un destino que se disfruta en todas las estaciones y es sede de grandes acontecimientos a nivel provincial y nacional.',
          'Ha sido declarada Capital Nacional del Rally, siendo una de las sedes más convocantes y emocionantes del Rally Mundial, y es el escenario de eventos como el tradicional Rally de Burros. Además de las competencias, la ciudad alberga recitales multitudinarios y fiestas populares.'
        ],
        image: '/images/destination/mina-clavero/puestos.jpg'
      }
    ],
    videos: [
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_rjLV60f-Io?si=zzB0UVMcXI43j-8q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'MINA CLAVERO - CORDOBA TRASLASIERRA',
        description: 'Visitamos Mina Clavero, su centro, balnearios Nido del Aguila, Los Elefantes, la principal ciudad el destino turistico mas elegido del Valle de Traslasierra Cordoba.'
      },
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hKjnydnnV1o?si=hILXMxvq0X31Y-xn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'MINA CLAVERO Y ALREDEDORES',
        description: 'Mina Clavero, ubicada al pie de las Sierras Grandes, es el destino más elegido del Valle de Traslasierra y un plan ideal para entretenerse o descansar.'
      },
    ],
    location: {
      address: 'Mina Clavero, Córdoba, Argentina',
      scr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217372.37342877118!2d-65.11056575682632!3d-31.64908857210666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d25d59048c4dd%3A0xa693b3400e45cb6c!2sMina%20Clavero%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1765464139621!5m2!1ses-419!2sar",
    },
    bestTimeToVisit: 'Todo el año, especialmente de noviembre a marzo por las vacaciones de verano',
    tips: [
      'Lleva protector solar y sombrero para las caminatas',
      'Las termas están abiertas todo el año',
      'Reserva con anticipación en temporada alta',
      'Prueba las empanadas locales en el centro del pueblo'
    ],
    telefono: '+54 9 3544 559410',
    email: 'informes@minaclavero.gov.ar',
    instagram: 'https://www.instagram.com/turismominaclavero/',
    web: 'https://www.minaclavero.gov.ar'
  },
  {
    id: 'villa-las-rosas',
    name: 'Villa de Las Rosas',
    description: 'Sabores, Cultura y Encanto Artesanal',
    heroImage: '/images/destinations/villa-dolores-hero.jpg',
    heroVideo: '/videos/villa-las-rosas.mp4',
    gallery: [
      { src: '/images/destination/villa-las-rosas/aguita.webp', alt: "Rio Villa de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/paisaje.webp', alt: "Paisaje Villa de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/plaza.webp', alt: "Plaza Villa de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/plaza-2.webp', alt: "Plaza Villa de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/remo.webp', alt: "Remo en Villa de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/ruta.webp', alt: "Ruta Villa de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/dique-noche.webp', alt: "Dique Villa de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/sendero-2.webp', alt: "Sendero de Las Rosas" },
      { src: '/images/destination/villa-las-rosas/dique-2.webp', alt: "Dique de Las Rosas" }
    ],
    highlights: [
    ],
    activities: [
      {
        name: 'Feria de Artesanos',
        description: 'Reúne a artesanos, elaboradores y productores locales, ofreciendo desde comidas naturales y dulces caseros hasta artesanías, sahumerios y espectáculos de música y circo a la gorra.',
        image: '/images/destination/villa-las-rosas/activities/artesanos.webp',
        duration: 'Feria',
        difficulty: 'Fácil',
        detailedDescription: 'La Feria de Artesanos, Elaboradores y Productores es uno de los atractivos más destacados y queridos de Villa de Las Rosas. Se celebra en la plaza central todos los sábados del año y se extiende a los jueves y sábados durante la temporada de verano. Este encuentro es un festín para los sentidos: se pueden adquirir productos frescos como verduras orgánicas, disfrutar de comidas naturales (o clásicas como pizzas y empanadas) y dulces caseros. El ambiente se completa con el delicioso olor de sahumerios y palo santo, a la vez que es amenizado por grupos de música o espectáculos de circo a la gorra, creando una experiencia de intercambio social y cultural inigualable.',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.512202899246!2d-65.05421572745068!3d-31.946998427829172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2d5c2b4fe32c1%3A0xf487e603cfd65438!2sVilla%20de%20las%20Rosas!5e0!3m2!1ses-419!2sar!4v1765473786414!5m2!1ses-419!2sar" 
      },
      {
        name: 'Sendero El Hornero',
        description: 'Esta ruta es la opción ideal para ascender al punto más alto del Complejo Dique La Viña, atravesando el bosque nativo. El sendero ofrece aire puro, tranquilidad y es un lugar mágico para reconectar con la naturaleza.',
        image: '/images/destination/villa-las-rosas/activities/sendero-dique.webp',
        duration: 'Paseo',
        difficulty: 'Moderado',
        detailedDescription: "El sendero permite regresar al Complejo Turístico y al Murallón del Dique La Viña por un camino nuevo que se adentra en el bosque nativo, alcanzando el punto de mayor altura de la zona para disfrutar de vistas panorámicas. Preparación: Asegúrate de llevar ropa y calzado adecuados, además de elementos esenciales como protector solar, gorro, repelente de insectos y una botella recargable para mantener la hidratación. Cuidado del Ambiente: Es crucial cuidar la naturaleza, evitando cortar flores, ramas o plantas. Nunca alimentes a los animales silvestres, ya que esto daña su salud y altera sus hábitos naturales. La ubicación del sendero se encuentra en el Complejo Dique La Viña, cerca de Villa de Las Rosas.",
        location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6776.808500603497!2d-65.037573!3d-31.868423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d2baec844f263%3A0x29420f791274d656!2sSendero%20El%20Hornero!5e0!3m2!1ses!2sar!4v1765473140791!5m2!1ses!2sar",
      },
      
      {
        name: 'Sendero Chingolo',
        description: 'El Sendero "El Chingolo" en Villa de Las Rosas es una ruta de senderismo apta para todos los niveles, ideal para disfrutar de la naturaleza en un entorno sereno. Ofrece hermosas vistas panorámicas y es un lugar perfecto para la observación de aves.',
        image: '/images/destination/villa-las-rosas/activities/sendero-chingolo.webp',
        duration: 'Paseo',
        difficulty: 'Moderado',
        detailedDescription: 'El Sendero "El Chingolo" brinda una experiencia gratificante de contacto directo con el entorno natural de Villa de Las Rosas. Su acceso es sencillo: se encuentra a 600 metros del portal de ingreso viniendo desde Los Hornillos por la Ruta 14, al comienzo de la recta de Los Pozos (o desde el ingreso al Complejo “Casa de Piedra”). Para disfrutar de la caminata de forma segura y respetuosa, se recomienda llevar ropa y calzado adecuados, además de elementos esenciales como protector solar, gorro, repelente de insectos y una botella recargable para mantenerse hidratado. Es fundamental seguir la regla de "No Dejar Huellas": cuidar la naturaleza, evitar cortar cualquier tipo de vegetación y, crucialmente, nunca alimentar a los animales silvestres para no alterar sus hábitos ni su salud.',
        location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54188.873043773136!2d-65.015239!3d-31.911907000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d2b9ff2ff0df5%3A0x8f63be5f8e7c710d!2sSendero%20El%20Chingolo!5e0!3m2!1ses!2sar!4v1765473234957!5m2!1ses!2sar",
      }
    ],
    aboutSections: [
      {
        title: 'Capital del Senderismo',
        content: [
          "Villa de Las Rosas es un encantador pueblito de montaña conocido por ser el portal del imponente Cerro Champaquí, ya que ofrece el camino más corto para acceder a este coloso.",
          "Además, ha sido nombrada la Capital del Senderismo gracias a sus circuitos ideales que bordean los arroyos locales. Esta bella localidad goza de una ubicación estratégica, quedando a 34 km al sur de Mina Clavero y a solo 5 km al norte de Quebrada de Los Pozos, el punto de acceso al Dique La Viña."
        ],
        image: '/images/destination/villa-las-rosas/sendero.webp'
      },
      {
        title: 'Sabores y Producción Artesanal',
        content: [
          'Una de las grandes tradiciones y orgullos de Villa de Las Rosas es la producción de aceite de oliva.',
          'Además, un atractivo destacado es su vibrante feria de productores y artesanos, que se realiza los sábados (y los jueves en verano) en la plaza central, ofreciendo comidas naturales, dulces caseros, verduras orgánicas y un ambiente multicultural amenizado por música y espectáculos.'
        ],
        image: '/images/destination/villa-las-rosas/feria.webp'
      },
      {
        title: 'Balneario Guasmara y Ríos',
        content: [
          'Para los meses de calor, Villa de Las Rosas ofrece el hermoso Balneario Guasmara, ubicado a solo unas cuadras de la plaza central.',
          'En este complejo se puede disfrutar de las aguas frescas del arroyo y de sus piletas alimentadas por una vertiente natural. Guasmara cuenta con áreas de camping y servicios, siendo un lugar perfecto para el disfrute familiar y el descanso.'
        ],
        image: '/images/destination/villa-las-rosas/dique.webp'
      }
    ],
    videos: [
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wvU5Y_M0lKE?si=CN7s2T76o7DSwspy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'Villa de Las Rosas, Córdoba, Argentina',
        description: 'Descubre la Magia de Villa de las Rosas: Donde la Naturaleza y la Cultura se Entrelazan.'
      },
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/w98YZUA-c9w?si=t75nuwf9QOf5Rzt6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'VILLA de las ROSAS 🌹 DIQUE la VIÑA',
        description: 'Te mostramos los lugares que no podes dejar de visitar en traslasierra, Villa de las Rosas un pueblo famoso por su feria ya se convirtio en un imperdible para el turista y el dique la viña, un hermoso lugar donde se disfruta plenamente de la naturaleza, un paraiso Cordobes. '
      },
    ],
    location: {
      address: 'Villa de las Rosas, Córdoba, Argentina',
      scr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13541.608933376883!2d-65.0664469703792!3d-31.949982832584038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2d5289abaca7b%3A0xf7df4b97b3c12fdc!2sVilla%20de%20Las%20Rosas%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1765474243264!5m2!1ses-419!2sar",
    },
    bestTimeToVisit: 'Todo el año, especialmente de noviembre a marzo por las vacaciones de verano',
    tips: [
      'Lleva protector solar y sombrero para las caminatas',
      'Las termas están abiertas todo el año',
      'Reserva con anticipación en temporada alta',
      'Prueba las empanadas locales en el centro del pueblo'
    ],
    telefono: '+54 9 3544 483505 / +54 9 3544 551359',
    email: 'contacto@villadelasrosas.com',
    instagram: 'https://www.instagram.com/munivilladelasrosas/',
    web: 'https://villadelasrosas.com.ar/'
  },
  {
    id: 'arroyo-de-los-patos',
    name: 'Arroyo de los Patos',
    description: 'Sabores, Cultura y Encanto Artesanal',
    heroImage: '/images/destinations/villa-dolores-hero.jpg',
    heroVideo: '/videos/arroyo-los-patos.mp4',
    gallery: [
      { src: '/images/destination/arroyo-los-patos/rio.jpg', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/rio-2.jpg', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/rio-3.webp', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/rio-4.jpg', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/olla.jpg', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/gente-patos.jpg', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/rio-caballo.webp', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/paisaje.jpg', alt: "Arroyo de los patos" },
      { src: '/images/destination/arroyo-los-patos/puente.jpg', alt: "Arroyo de los patos" }
    ],
    highlights: [
    ],
    activities: [
      {
        name: 'El Mirador',
        description: 'Ruta de senderismo autoguiada y de baja intensidad, ideal para caminatas o paseos en bicicleta, ofreciendo vistas espectaculares del valle y las sierras.',
        image: '/images/destination/arroyo-los-patos/activities/playa-2.jpg',
        duration: 'Paseo',
        difficulty: 'Fácil',
        detailedDescription: 'Es una ruta de fácil acceso, con un recorrido aproximado de 4 km de ida y vuelta, perfecta para excursionistas de todos los niveles. El sendero se adentra en el bosque nativo, donde puedes disfrutar de la abundante vegetación y la observación de aves. Llevar calzado cómodo y agua es esencial para disfrutar de las vistas panorámicas del entorno serrano.',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13568.575286849416!2d-65.01978829665998!3d-31.766563055711377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d28ad6eb6e9c7%3A0xdc33f0fb50af4548!2sRio%20Los%20Sauces%20Arroyo%20De%20Los%20Patos!5e0!3m2!1ses-419!2sar!4v1765478478417!5m2!1ses-419!2sar"
      },
      
      {
        name: 'Playas Tranquilas',
        description: 'Disfrutar de las playas de arena y las aguas mansas y poco profundas del río, perfectas para el baño familiar y el descanso.',
        image: '/images/destination/arroyo-los-patos/activities/playa.jpg',
        duration: 'Paseo',
        difficulty: 'Moderado',
        detailedDescription: "El Río Los Sauces es el protagonista de la localidad. Sus aguas tranquilas y sus extensas playitas de arena son ideales para pasar el día sin riesgos, especialmente con niños. Puedes refrescarte, jugar en la orilla o simplemente instalarte bajo la sombra de un árbol para leer. Es un lugar clave para la relajación absoluta y el contacto sereno con la naturaleza.",
        location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13568.575286849416!2d-65.01978829665998!3d-31.766563055711377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d29ed9f021bbd%3A0x8aaa1157bae123d2!2splaya%20del%20rio%20arroyo%20de%20los%20patos!5e0!3m2!1ses-419!2sar!4v1765478524683!5m2!1ses-419!2sar"
      },
      
      {
        name: 'Paseo por el Corazón',
        description: 'Recorrer el "pueblito boutique", disfrutando de su calma, arquitectura y quizás coincidir con alguna feria o evento local en la plaza.',
        image: '/images/destination/arroyo-los-patos/activities/mate.jpg',
        duration: 'Paseo',
        difficulty: 'Moderado',
        detailedDescription: 'La localidad es conocida por su ambiente acogedor y sereno. Un paseo tranquilo por el centro permite apreciar su arquitectura y el aire de paz que la define. Además, si tu visita coincide con septiembre, podrás participar en las vibrantes fiestas patronales en honor a San Roque, un evento que reúne a la comunidad con platos típicos, música y celebraciones, mostrando la rica tradición cultural del pueblo.',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27137.10629390571!2d-65.02156960162003!3d-31.766714035577102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d28ad555c910f%3A0x993a1048154e1737!2sX5889%20Arroyo%20de%20Los%20Patos%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1765478580033!5m2!1ses-419!2sar",
      }],
    aboutSections: [
      {
        title: 'El "Pueblito Boutique"',
        content: [
          "Arroyo de Los Patos es una verdadera joya escondida y un enclave de pura calma en el Valle de Traslasierra.",
          'Definida como el "pueblito boutique" de la región, esta localidad se destaca por su tranquilidad inigualable y su ambiente acogedor, siendo el refugio ideal para quienes buscan desconectarse del bullicio diario. Su ubicación es estratégica, a minutos de Nono, Mina Clavero y Villa Cura Brochero, permitiendo disfrutar de la serenidad serrana y a la vez tener fácil acceso a los centros turísticos.'
        ],
        image: '/images/destination/arroyo-los-patos/rio-completo.jpg'
      },
      {
        title: 'Senderismo y el Río Los Sauces',
        content: [
          'El entorno natural de Arroyo de Los Patos es su mayor atractivo. El pueblo es surcado por cuatro arroyos y el imponente Río Los Sauces, conocido por sus aguas mansas y poco profundas, ideales para el disfrute de familias con niños.',
          'Las playas de arena a lo largo del río son perfectas para relajarse, leer y observar aves. Para los amantes del ejercicio, serpentean senderos como Los Patos y El Mirador, ideales para caminatas y paseos en bicicleta, ofreciendo vistas panorámicas y la oportunidad de respirar el aire puro de las Sierras.'
        ],
        image: '/images/destination/arroyo-los-patos/playa.jpg'
      },
      {
        title: 'Fiestas Tradicionales',
        content: [
          'La historia de Arroyo de Los Patos se remonta a Don David López, un prolijo artesano que, tras descubrir la fertilidad de los suelos, construyó represas para el aprovechamiento del agua. Estas represas se poblaron de patos y gansos, lo que dio el nombre a la localidad.',
          'A lo largo de los años, el pueblo ha crecido manteniendo un fuerte sentido de comunidad, con un hito destacado en su fiesta patronal en honor a San Roque cada septiembre, que celebra la rica cultura gastronómica y fomenta la cohesión social, atrayendo a visitantes y lugareños.'
        ],
        image: '/images/destination/arroyo-los-patos/cartel.jpg'
      }
    ],
    videos: [
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6M6lwZsBHlI?si=J8OYpF3MAKr5d82f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: 'Descubrimos un Pueblo BOUTIQUE en el Valle de Traslasierra ⛰️ Arroyo de los Patos',
        description: 'En este video te llevamos a conocer Arroyo de los Patos, un pequeño pueblo boutique en el Valle de Traslasierra, Córdoba, rodeado de naturaleza, tranquilidad y paisajes increíbles.'
      },
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ytIz_aDYmQ8?si=4Px9Ai-LCKjwInzu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: '📍 ARROYO DE LOS PATOS 🌍 El pueblo de las playas doradas 😍👌',
        description: 'En este nuevo video cortito y sencillo les traemos nuestro viajecito a Arroyo de los Patos, un pueblito de algo mas de mil habitantes y que se ubica al sur de Mina Clavero en el Valle de Traslasierra pocos kms antes de llegar a Nono. Muy tranquilo y en un entorno digno de un cuadro se ubica a las orillas del río Los Sauces cuyas playas de arena y aguas transparentes te invitan a relajarte y vivir un día magnifico.'
      },
    ],
    location: {
      address: 'Arroyo de los Patos, Córdoba, Argentina',
      scr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27137.10629390571!2d-65.02156960162003!3d-31.766714035577102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d28ad555c910f%3A0x993a1048154e1737!2sX5889%20Arroyo%20de%20Los%20Patos%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1765478580033!5m2!1ses-419!2sar"
    },
    bestTimeToVisit: 'Todo el año, especialmente de noviembre a marzo por las vacaciones de verano',
    tips: [
      'Lleva protector solar y sombrero para las caminatas',
      'Las termas están abiertas todo el año',
      'Reserva con anticipación en temporada alta',
      'Prueba las empanadas locales en el centro del pueblo'
    ],
    telefono: '+54 9 3544 542934',
    email: 'comunarroyodelospatos @yahoo.com.ar',
    instagram: 'https://www.instagram.com/turismo.arroyodelospatos/',
    web: 'https://www.facebook.com/comunarroyodelospatos'
  },
]
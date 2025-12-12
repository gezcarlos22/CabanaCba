import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'
import { HeroData } from '@/app/data/heroData'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Cabaña', href: '/detalle' },
  { label: 'Servicios', href: '../#Servicios' },
  { 
    label: 'Destinos', 
    href: '../#Destinos',
    submenu: [
      { label: 'Arroyo de los Patos', href: '/destinos/arroyo-de-los-patos' },
      { label: 'Mina Clavero', href: '/destinos/mina-clavero' },
      { label: 'Villa Dolores', href: '/destinos/villa-dolores' },
      { label: 'Villa Las Rosas', href: '/destinos/villa-las-rosas' }
    ]
  },
  { label: 'Preguntas', href: '../#FAQ' },
  { label: 'Testimonios', href: '../#testimonial-section' },
  { label: 'Contacto', href: '../#Contacto' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: '4 a 5 Personas',
    imgSrc: '/images/service/cabaña.png',
    paragraph:
      'Cabaña ideal para grupos familiares o de amigos, diseñada para un máximo confort.',
    link: 'Learn more',
  },
  {
    heading: 'Dormitorios',
    imgSrc: '/images/service/cama.png',
    paragraph:
      'Distribución de camas: una (1) cama matrimonial, dos (2) camas individuales de 1 plaza y un sofá/cama adicional.',
    link: 'Learn more',
  },
  {
    heading: 'Estacionamiento',
    imgSrc: '/images/service/auto.png',
    paragraph:
      'Contamos con espacio seguro y techado dentro del predio para resguardar su vehículo durante toda su estadía.',
    link: 'Learn more',
  },
]

const ServiceData: aboutdata[] = [
  {
    heading: '4 a 5 Personas',
    imgSrc: '/images/service/cabaña.png',
    paragraph:
      'Cabaña ideal para grupos familiares o de amigos, diseñada para un máximo confort.',
    link: 'Learn more',
  },
  {
    heading: 'Dormitorios',
    imgSrc: '/images/service/cama.png',
    paragraph:
      'Distribución de camas: una (1) cama matrimonial, dos (2) camas individuales de 1 plaza y un sofá/cama adicional.',
    link: 'Learn more',
  },
  {
    heading: 'Baño Completo',
    imgSrc: '/images/service/baño.png',
    paragraph:
      'Un (1) baño moderno y funcional, equipado con todas las comodidades',
    link: 'Learn more',
  },
  {
    heading: 'Ropa Blanca de Primera',
    imgSrc: '/images/service/ropa.png',
    paragraph:
      'Proveemos sábanas de algodón y toallas suaves de alta calidad para cada huésped.',
    link: 'Learn more',
  },
  {
    heading: 'Vajilla Completa',
    imgSrc: '/images/service/vajilla.png',
    paragraph:
      'Cocina totalmente equipada con vajilla y utensilios necesarios para 5 personas.',
    link: 'Learn more',
  },
  {
    heading: 'Juegos de Mesa y Cartas',
    imgSrc: '/images/service/cartas.png',
    paragraph:
      'Una selección de juegos para disfrutar de momentos de diversión y conexión en familia o entre amigos',
    link: 'Learn more',
  },
  {
    heading: 'Wi-Fi de Alta Velocidad',
    imgSrc: '/images/service/wifi.png',
    paragraph:
      'Conexión estable y gratuita para planificar sus excursiones o simplemente disfrutar de su contenido favorito.',
    link: 'Learn more',
  },
  {
    heading: 'Smart TV con Plataformas',
    imgSrc: '/images/service/tv.png',
    paragraph:
      'Televisor con acceso a internet para que pueda utilizar sus cuentas de streaming (Netflix, YouTube, etc.)',
    link: 'Learn more',
  },
  {
    heading: 'Estacionamiento',
    imgSrc: '/images/service/auto.png',
    paragraph:
      'Contamos con espacio seguro y techado dentro del predio para resguardar su vehículo durante toda su estadía.',
    link: 'Learn more',
  },
  {
    heading: 'Área de Asador',
    imgSrc: '/images/aboutus/asador.png',
    paragraph:
      'Sector de parrilla completamente equipado, ideal para disfrutar de un auténtico asado argentino al aire libre.',
    link: 'Learn more',
  },
  {
    heading: 'Piscina',
    imgSrc: '/images/aboutus/picina.png',
    paragraph:
      'Disfrute de nuestra piscina con temperatura agradable, perfecta para refrescarse y relajarse después de una caminata.',
    link: 'Learn more',
  },
  {
    heading: 'Espacios Exteriores',
    imgSrc: '/images/aboutus/exterior.png',
    paragraph:
      'Galería con cómodos sillones y mesas para disfrutar de sus comidas o el atardecer con vistas a la sierra.',
    link: 'Learn more',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

//Activities data

const ActivitiesData = [
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
        name: 'Feria de Artesanos',
        description: 'Reúne a artesanos, elaboradores y productores locales, ofreciendo desde comidas naturales y dulces caseros hasta artesanías, sahumerios y espectáculos de música y circo a la gorra.',
        image: '/images/destination/villa-las-rosas/activities/artesanos.webp',
        duration: 'Feria',
        difficulty: 'Fácil',
        detailedDescription: 'La Feria de Artesanos, Elaboradores y Productores es uno de los atractivos más destacados y queridos de Villa de Las Rosas. Se celebra en la plaza central todos los sábados del año y se extiende a los jueves y sábados durante la temporada de verano. Este encuentro es un festín para los sentidos: se pueden adquirir productos frescos como verduras orgánicas, disfrutar de comidas naturales (o clásicas como pizzas y empanadas) y dulces caseros. El ambiente se completa con el delicioso olor de sahumerios y palo santo, a la vez que es amenizado por grupos de música o espectáculos de circo a la gorra, creando una experiencia de intercambio social y cultural inigualable.',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.512202899246!2d-65.05421572745068!3d-31.946998427829172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2d5c2b4fe32c1%3A0xf487e603cfd65438!2sVilla%20de%20las%20Rosas!5e0!3m2!1ses-419!2sar!4v1765473786414!5m2!1ses-419!2sar" 
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
    ]

// plans data
const PlansData = [
  {
    heading: 'Startup',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'per user',
    features: {
      profiles: '5 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '400+ Templated',
      view: 'Calendar View',
      support: '24/7 Support',
    },
  },
  {
    heading: 'Business',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'per user',
    features: {
      profiles: '10 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '600+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
  {
    heading: 'Agency',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'per user',
    features: {
      profiles: '100 Social Profiles',
      posts: '100 Scheduled Posts Per Profile',
      templates: '800+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Alejandro Moreno',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'Excelente la atención de Federico... todo muy hermoso, prolijo, detalles cuidados... excelente relación precio calidad... muy conforme',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Cristina Gomez',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'Hermosa Lugar. Vistas espectaculares a las montañas! La atención de los dueños 10 puntos. Volvería. Me encantó Arroyo de los patos!',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {  
    name: 'Jessica Alonso',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'Recomiendo. Las vistas que tiene es increible. Muy amable y atenta toda la atención que nos brindaron. Volvería a este lugar sin dudas.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Julieta Rodriguez',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'La ubicación es perfecta para recorrer. Hicimos caminatas increíbles con vistas panorámicas y por la noche el cielo estrellado es algo que no se puede describir. ¡Gracias por la paz!',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Martin Ludueña',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'Unas vacaciones tranquilas y refrescantes. Los ríos cercanos son ideales, pasamos el día en Nono y a la vuelta la cabaña era un oasis de descanso. La atención de sus dueños, impecable.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Valeria Garcia',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'La cercanía a Villa Dolores y Mina Clavero nos permitió pasear sin problemas, pero el verdadero tesoro es el arroyo. ¡Qué hermoso lugar! Volveremos seguro a disfrutar del silencio y la naturaleza.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Cabaña', href: '/detalle' },
      { label: 'Servicios', href: '../#Servicios' },
      { label: 'Destinos', href: '../#Destinos' },
      { label: 'Preguntas', href: '../#FAQ' },
      { label: 'Testimonios', href: '../#testimonial-section' },
      { label: 'Contacto', href: '../#Contacto' },
    ],
  },
]




export async function GET() {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
    HeroData,
    ServiceData,
    ActivitiesData
  })
}
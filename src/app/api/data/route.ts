import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Inicio', href: '#Inicio' },
  { label: 'Servicios', href: '#Servicios' },
  { label: 'Destinos', href: '#Destinos' },
  { label: 'Preguntas', href: '#FAQ' },
  { label: 'Testimonios', href: '#testimonial-section' },
  { label: 'Contacto', href: '#Contacto' },
]

// about data
const Aboutdata: aboutdata[] = [
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
      { label: 'Inicio', href: '#Inicio' },
      { label: 'Servicios', href: '#Servicios' },
      { label: 'Destinos', href: '#Destinos' },
      { label: 'Preguntas', href: '#FAQ' },
      { label: 'Testimonios', href: '#testimonial-section' },
      { label: 'Contacto', href: '#Contacto' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}

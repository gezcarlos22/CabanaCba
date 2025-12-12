import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Team from '@/app/components/Home/Team'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'
import { Activity } from '@/app/types/destinationdata'

// Import activities data directly
const ActivitiesData: Activity[] = [
  {
    name: 'Festival Nacional de la Papa',
    description: 'Del 7 al 12 de enero, Villa Dolores tendrá una programación de primera categoría. Seis noches para disfrutar, cantar y celebrar en nuestro Teatro Griego y Plaza Mitre, con artistas que hacen historia.',
    image: '/images/destination/villa-dolores/activities/festival-2.jpg',
    duration: 'Evento',
    difficulty: 'Fácil' as const,
    detailedDescription: '¡Villa Dolores se prepara una vez más para ser el epicentro artístico y turístico del oeste cordobés! Sean todos bienvenidos a esta nueva edición del Festival Nacional de la Papa, una celebración cargada de música, baile y tradición. La grilla de artistas garantiza noches inolvidables: el MIÉRCOLES 7 la apertura es a puro cuarteto con la LBC y Euge Quevedo. El JUEVES 8 es la noche de clásicos con la llegada de Abel Pintos, además de las actuaciones de Tranka Style y Grupo Sentires. El SÁBADO 10, el escenario mayor de Traslasierra recibe a Soledad, la voz más emblemática del folklore argentino, junto a Sabor Canela y Juan Zamora. El gran cierre, el LUNES 12, será a puro baile con la energía de Q Lokura. Además, el festival ofrece eventos especiales con entrada libre y gratuita: el VIERNES 9 se realizará por primera vez La Peña del Festival en el Teatro Griego, con la presentación de La Terna, Nadia Pereyra, Santiago Simón y La Fórmula. Y el DOMINGO 11, la Plaza Mitre será el escenario de una gran noche de música y baile con Dani Guardia, Gabi Oviedo y Caro Arrieta.',
    location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3385.419848540087!2d-65.181992!3d-31.949504799999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd4a46749f58d%3A0xc24958fcee8ab810!2sTeatro%20Griego!5e0!3m2!1ses!2sar!4v1765411418599!5m2!1ses!2sar"
  },
  {
    name: 'Feria de Artesanos',
    description: 'Reúne a artesanos, elaboradores y productores locales, ofreciendo desde comidas naturales y dulces caseros hasta artesanías, sahumerios y espectáculos de música y circo a la gorra.',
    image: '/images/destination/villa-las-rosas/activities/artesanos.webp',
    duration: 'Feria',
    difficulty: 'Fácil' as const,
    detailedDescription: 'La Feria de Artesanos, Elaboradores y Productores es uno de los atractivos más destacados y queridos de Villa de Las Rosas. Se celebra en la plaza central todos los sábados del año y se extiende a los jueves y sábados durante la temporada de verano. Este encuentro es un festín para los sentidos: se pueden adquirir productos frescos como verduras orgánicas, disfrutar de comidas naturales (o clásicas como pizzas y empanadas) y dulces caseros. El ambiente se completa con el delicioso olor de sahumerios y palo santo, a la vez que es amenizado por grupos de música o espectáculos de circo a la gorra, creando una experiencia de intercambio social y cultural inigualable.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.512202899246!2d-65.05421572745068!3d-31.946998427829172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2d5c2b4fe32c1%3A0xf487e603cfd65438!2sVilla%20de%20las%20Rosas!5e0!3m2!1ses-419!2sar!4v1765473786414!5m2!1ses-419!2sar" 
  },
  {
    name: 'Casino Mina Clavero',
    description: 'La oferta de esparcimiento en Mina Clavero es completa y vibrante. Además de una rica cartelera cultural y gastronómica, la villa cuenta con un renovado Casino y diversas salas de juegos, teatros, cine y discotecas, asegurando diversión y entretenimiento para adultos y familias durante la noche, en todas las estaciones del año.',
    image: '/images/destination/mina-clavero/activities/casino.jpg',
    duration: 'Entretenimiento',
    difficulty: 'Moderado' as const,
    detailedDescription: 'A la hora de buscar diversión y entretenimiento, Mina Clavero ofrece varias alternativas. El atractivo se centra en su renovado Casino, un punto clave para el esparcimiento adulto que complementa la diversa oferta de la ciudad. Junto a este, la villa dispone de salas de juegos infantiles y parques recreativos, asegurando que toda la familia encuentre una opción de diversión nocturna, sumándose a los teatros, cine y discotecas disponibles en el centro comercial.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.6910260246646!2d-65.00400849008973!3d-31.72433407401331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d2677fd9136f1%3A0x51059ba9261e884c!2sCasino%20Provincial%20de%20Mina%20Clavero!5e0!3m2!1ses-419!2sar!4v1765466373730!5m2!1ses-419!2sar"
  }
]

export const metadata: Metadata = {
  title: 'Cabaña Traslasierra',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Dedicated />
      <Team />
      <Aboutus />
      <Digital />
      <Beliefs />
      <Articles 
        activities={ActivitiesData}
        title="ACTIVIDADES"
        subtitle="Descubre las mejores experiencias"
      />
      <FAQ />
      <Testimonial />
      <Join />
      <Insta />
    </main>
  )
}

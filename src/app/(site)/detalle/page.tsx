import Hero2 from '@/app/components/Details/Hero2'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'
import { HeroData } from '@/app/data/heroData'
import AboutDetails from '@/app/components/Details/AboutDetails'
import ServiceDetails from '@/app/components/Details/ServiceDetails'
import Join from '@/app/components/Home/Joinus'


export const metadata: Metadata = {
  title: 'Cabaña Arroyo los patos',
}

export default function DetallePage() {
  return (
    <main>
      <Hero2 data={HeroData[0]}/>
      <AboutDetails/>
      <ServiceDetails/>
      <Join />
      <Insta/>
    </main>
  )
}

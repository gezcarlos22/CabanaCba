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
import { destinationsData } from '@/app/data/destinations'
import { Metadata } from 'next'

// Fetch activities data
const getActivitiesData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/data`)
  const data = await res.json()
  return data.ActivitiesData
}

export const metadata: Metadata = {
  title: 'Cabaña Traslasierra',
}

export default async function Home() {
  const activitiesData = await getActivitiesData()
  
  return (
    <main>
      <Hero />
      <Dedicated />
      <Team />
      <Aboutus />
      <Digital />
      <Beliefs />
      <Articles 
        activities={activitiesData}
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

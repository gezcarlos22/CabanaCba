'use client'
import React from 'react'
import Image from 'next/image'
import ContentDetails from '../ContentDetails'

const AboutDetails = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 gap-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <Image
              src='/images/dedicated/cabaña1.jpg'
              alt='man-icon'
              width={716}
              height={500}
              className='mx-auto md:mx-0 rounded-3xl'
            />
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6 flex flex-col justify-center'>
            <h3 className='text-center -mr-1 lg:text-start lg:leading-20 leading-14'>
              <span className='text-primary'>Cabaña</span> en Córdoba
            </h3>
            <p className='text-xl font-medium text-black mt-5 text-center lg:text-start'>
              Esta no es solo una cabaña, es la mejor opción en Traslasierra para transformar tus vacaciones en una experiencia memorable.       
            </p>
            <p className='text-xl font-medium text-black mt-5 text-center lg:text-start'>
              Diseñada pensando en la comodidad y la tranquilidad, es el refugio ideal para grupos familiares o círculos de amigos que buscan desconectar del ritmo diario y sumergirse en un entorno natural privilegiado.
            </p>
            <p className='text-xl font-medium text-black mt-5 text-center lg:text-start'>
              Se encuentra rodeada de destinos espectaculares listos para ser explorados, haciendo de cada día una nueva aventura.
            </p>
          </div>
        </div>
        <ContentDetails/>
      </div>
      
    </section>
  )
}
export default AboutDetails
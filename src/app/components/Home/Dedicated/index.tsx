'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Dedicated = () => {
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
            <h2 className='text-center -mr-1 lg:text-start lg:leading-20 leading-14'>
              <span className='text-primary'>Cabaña</span> en Córdoba
            </h2>
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

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 mt-20'>
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 flex flex-col justify-center'>
            <h2 className='text-center -mr-1 lg:text-start lg:leading-20 leading-14'>
              Arroyo de los Patos
            </h2>
            <p className='text-xl font-medium text-black mt-5 text-center lg:text-start'>
              Su protagonista es el Río de Los Sauces, que ofrece playas de arena, aguas tranquilas y cálidas ideales para el disfrute familiar y el descanso absoluto.       
            </p>
            <p className='text-xl font-medium text-black mt-5 text-center lg:text-start'>
              Su ubicación es estratégica, a minutos de las ciudades más grandes como Mina Clavero y Nono, combinando así la serenidad de la naturaleza con la cercanía a centros turísticos.
            </p>
            <div className='text-center lg:text-start my-10'>
              <Link
                  href='/destinos/arroyo-de-los-patos'
                  className='text-xl py-5 px-14 my-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  CONOCE MÁS
              </Link>
            </div>
          </div>
          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <Image
              src='/images/destination/arroyo-los-patos/rio-completo.jpg'
              alt='man-icon'
              width={716}
              height={500}
              className='mx-auto md:mx-0 rounded-3xl'
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}
export default Dedicated

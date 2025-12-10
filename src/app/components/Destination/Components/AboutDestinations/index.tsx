'use client'
import React from 'react'
import Image from 'next/image'
import { DestinationData } from '@/app/types/destinationdata'

interface AboutDestinationsProps {
  destination: DestinationData
  sections: {
    title: string
    content: string[]
    image: string
  }[]
}

const AboutDestinations = ({ destination, sections }: AboutDestinationsProps) => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden py-16'>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-center mb-12">
            ¿Por qué visitar {destination.name}?
          </h2>
        </div>
      <div className='container mx-auto max-w-7xl px-4'>
        {sections.map((section, index) => {
          const isEven = index % 2 === 0
          
          return (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-5 ${index > 0 ? 'mt-20' : ''}`}>
              {/* Imagen */}
              <div className={`col-span-12 lg:col-span-6 justify-self-center ${
                isEven ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <Image
                  src={section.image}
                  alt={section.title}
                  width={716}
                  height={500}
                  className='mx-auto md:mx-0 rounded-3xl'
                />
              </div>

              {/* Texto */}
              <div className={`col-span-12 lg:col-span-6 flex flex-col justify-center ${
                isEven ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <h2 className='text-4xl text-center -mr-1 lg:text-start lg:leading-20 leading-14'>
                  {index === 0 ? (
                    <>{section.title}</>
                  ) : (
                    section.title
                  )}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className='text-xl font-medium text-black mt-5 text-center lg:text-start'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      
    </section>
  )
}
export default AboutDestinations 
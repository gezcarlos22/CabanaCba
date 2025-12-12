'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Featured from '../Featured'

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/images/team/team.webp',
    '/images/team/teamimg.png',
    '/images/dedicated/cabaña1.jpg',
    '/images/featured/feat1.jpg',
    '/images/featured/feat2.jpg',
    '/images/team/team.webp'
  ]

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true) 
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <section className='overflow-x-hidden'>
        <div className='container mx-auto max-w-7xl px-4 relative'>
          <h2 className='text-center max-w-5xl mx-auto'>
           Cabaña con Alma de Sierra
          </h2>
          <h5 className='font-medium text-center pt-10 text-black max-w-3xl mx-auto'>
            Descubre el equilibrio perfecto entre la comodidad moderna y la belleza salvaje de la naturaleza.
          </h5>
          
          {/* Gallery */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
            {images.map((src, index) => (
              <div key={index} className='relative group cursor-pointer overflow-hidden rounded-3xl' onClick={() => openModal(index)}>
                <Image
                  src={src}
                  alt={`team-image-${index + 1}`}
                  width={400}
                  height={300}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center'>
                  <Icon icon='mdi:eye' width={48} height={48} className='text-white' />
                </div>
              </div>
            ))}
          </div>
          <Featured/>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center' onClick={closeModal}>
          <button
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
            className='absolute top-4 right-4 text-white hover:text-gray-300 z-10'
          >
            <Icon icon='mdi:close' width={32} height={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className='absolute left-4 text-white hover:text-gray-300 z-10'
          >
            <Icon icon='mdi:chevron-left' width={48} height={48} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className='absolute right-4 text-white hover:text-gray-300 z-10'
          >
            <Icon icon='mdi:chevron-right' width={48} height={48} />
          </button>

          <div className='max-w-6xl max-h-full p-4' onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentImageIndex]}
              width={1200}
              height={800}
              alt='team-image-fullscreen'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Team

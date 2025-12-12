'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { featureddata } from '@/app/types/featureddata'
import FeaturedSkeleton from '../../Skeleton/Featured'
import { Icon } from '@iconify/react'

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Featured = () => {
  const [featured, setFeatured] = useState<featureddata[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = [
    '/images/hero/video_cabaña.mp4',
    '/images/hero/video_cabaña.mp4',
    '/images/hero/video_cabaña.mp4'
  ]

  const openModal = (index: number) => {
    setCurrentVideoIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatured(data.FeaturedData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
    <div className="relative bg-deepSlate dark:bg-darkmode  after:absolute after:w-1/4 after:h-1/4  after:top-72 after:right-0 after:bg-no-repeat mt-10">
      <div className='container mx-auto max-w-7xl relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <FeaturedSkeleton key={index} />
              ))
            : videos.slice(0, 2).map((videoSrc, i) => (
                <div key={i} className='bg-transparent rounded-3xl'>
                  <div className='relative group cursor-pointer overflow-hidden rounded-2xl' onClick={() => openModal(i)}>
                    <video
                      src={videoSrc}
                      className='w-full h-[400px] object-cover rounded-2xl'
                      muted
                      loop
                      autoPlay
                    />
                    <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center'>
                      <Icon icon='mdi:play' width={64} height={64} className='text-white' />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

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
            onClick={(e) => { e.stopPropagation(); prevVideo(); }}
            className='absolute left-4 text-white hover:text-gray-300 z-10'
          >
            <Icon icon='mdi:chevron-left' width={48} height={48} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextVideo(); }}
            className='absolute right-4 text-white hover:text-gray-300 z-10'
          >
            <Icon icon='mdi:chevron-right' width={48} height={48} />
          </button>

          <div className='max-w-6xl max-h-full p-4' onClick={(e) => e.stopPropagation()}>
            <video
              src={videos[currentVideoIndex]}
              className='w-full h-full object-contain'
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  </>
  )
}
export default Featured

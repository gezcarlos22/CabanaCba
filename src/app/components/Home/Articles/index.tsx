'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import { articles } from '@/app/types/articles'
import { Activity } from '@/app/types/destinationdata'
import ArticlesSkeleton from '../../Skeleton/Articles'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

interface ArticlesProps {
  activities?: Activity[]
  title?: string
  subtitle?: string
}

const Articles = ({ activities, title = 'ARTICLES', subtitle = 'Our latest post.' }: ArticlesProps) => {
  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (activity: Activity) => {
    setSelectedActivity(activity)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedActivity(null)
  }

  useEffect(() => {
    if (activities) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.ArticlesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [activities])

  return (
    <section id='Blog' className='relative overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center'>
          <p className='text-primary text-xl font-normal tracking-widest'>
            {title}
          </p>
          <h2>{subtitle}</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ArticlesSkeleton key={i} />
              ))
            : activities
            ? activities.map((activity, i) => (
                <div 
                  key={i} 
                  className='bg-white px-3 pt-3 pb-12 shadow-lg rounded-4xl relative cursor-pointer hover:shadow-xl transition-shadow'
                  onClick={() => openModal(activity)}
                >
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    width={389}
                    height={262}
                    className='inline-block m-auto rounded-3xl'
                  />
                  <div className='absolute text-base bg-primary text-white py-3 px-6 rounded-full top-56 right-11'>
                    {activity.duration}
                  </div>
                  <h5 className='font-bold pt-6'>{activity.name}</h5>
                  <div>
                    <h3 className='text-sm font-normal pt-6 pb-2 text-black/75 dark:text-white/75'>
                      {activity.description}
                    </h3>
                  </div>
                </div>
              ))
            : articles.map((items, i) => (
                <div key={i} className='bg-white px-3 pt-3 pb-12 shadow-lg rounded-4xl relative'>
                  <Image
                    src={items.imgSrc}
                    alt='gaby'
                    width={389}
                    height={262}
                    className='inline-block m-auto rounded-3xl'
                  />
                  <Link
                    href='/'
                    className='absolute text-base bg-primary text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full top-56 right-11'>
                    {items.time} read
                  </Link>
                  <h5 className='font-bold pt-6'>{items.heading}</h5>
                  <h5 className='font-bold pt-1'>{items.heading2}</h5>
                  <div>
                    <h3 className='text-sm font-normal pt-6 pb-2 text-black/75 dark:text-white/75'>
                      {items.name}
                    </h3>
                    <h3 className='text-sm font-normal pb-1 text-black/75 dark:text-white/75'>
                      {items.date}
                    </h3>
                  </div>
                </div>
              ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedActivity && (
          <div 
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
            onClick={closeModal}
          >
            <div 
              className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='relative'>
                <button
                  onClick={closeModal}
                  className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10'
                >
                  ×
                </button>
                <Image
                  src={selectedActivity.image}
                  alt={selectedActivity.name}
                  width={600}
                  height={400}
                  className='w-full h-64 object-cover rounded-t-lg'
                />
              </div>
              <div className='p-6'>
                <h2 className='text-2xl font-bold mb-4'>{selectedActivity.name}</h2>
                <p className='text-gray-600 mb-4'>{selectedActivity.description}</p>
                {selectedActivity.detailedDescription && (
                  <div className='mb-4'>
                    <h3 className='text-lg font-semibold mb-2'>Descripción detallada</h3>
                    <p className='text-gray-700'>{selectedActivity.detailedDescription}</p>
                  </div>
                )}
                <div className='mb-4'>
                  <p className='text-sm text-gray-600'>Tipo: {selectedActivity.duration}</p>
                </div>
                {selectedActivity.location && (
                  <div className='mt-6'>
                    <h3 className='text-lg font-semibold mb-2'>Ubicación</h3>
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(selectedActivity.location)}`}
                      width='100%'
                      height='300'
                      style={{ border: 0 }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      className='rounded-lg'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default Articles

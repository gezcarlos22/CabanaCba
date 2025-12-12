'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='Servicios' className=' bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='py-10 px-8 bg-cover bg-center bg-no-repeat rounded-3xl' style={{backgroundImage: 'url(/images/aboutus/img_rio1.jpg)'}}>
          <div className='mx-auto py-2 px-5 bg-primary/15 rounded-full w-fit'>
            <p className='text-center text-primary text-lg font-bold tracking-widest uppercase'>
              servicios
            </p>
          </div>
          <h2 className='text-center pb-12 text-white'>Nuestro compromiso con usted.</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                    className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group justify-center'>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
                        width={75}
                        height={75}
                        className='mb-5 mx-auto md:mx-0 md:order-2'
                      />
                      <h5 className='group-hover:text-white mb-5 text-center md:text-left md:order-1'>
                        {item.heading}
                      </h5>
                    </div>
                    
                    <p className='text-lg font-normal text-black group-hover:text-white mb-5'>
                      {item.paragraph}
                    </p>
                  </div>
                ))}
          </div>
          <div className='text-center mt-10'>
              <Link
                  href='/detalle/#ServiciosDetails'
                  className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  CONOCE MÁS
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus

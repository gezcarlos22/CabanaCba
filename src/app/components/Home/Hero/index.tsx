'use client'
import Link from 'next/link'
import Image
 from 'next/image'
const Hero = () => {
  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='relative overflow-hidden z-1 h-screen w-full' id='Inicio'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        autoPlay
        muted
        loop
        playsInline>
        <source src='/images/hero/video_cabaña.mp4' type='video/mp4' />
      </video>
      <div className='container mx-auto pt-24 max-w-7xl px-4 relative z-10'>
        <div className='grid grid-cols-12 justify-center items-center'>
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
              <p className='text-primary text-lg font-bold'>VACACIONES</p>
            </div>
            <h1>
              Vive el encanto de Traslasierra.
            </h1>
            <Link href="/detalle">
              <button className='bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode hover:cursor-pointer mt-10'>
                DESCUBRE MÁS
              </button>
            </Link>
          </div>

          <div className='absolute -bottom-40 -right-40 xl:block hidden'>
                      <Image
                        src='/images/hero/persona3.png'
                        alt='doodle'
                        width={615}
                        height={391}
                      />
                    </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

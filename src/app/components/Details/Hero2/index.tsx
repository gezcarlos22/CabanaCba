'use client'
import { herodata } from '@/app/types/herodata'

interface Hero2Props {
  data: herodata
}

const Hero2 = ({ data }: Hero2Props) => {
  return (
    <section className='relative overflow-hidden h-screen w-full' id={data.section}>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        muted
        loop
        playsInline>
        <source src={data.video} type='video/mp4' />
      </video>
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <div className='text-center px-4'>
          <div className='py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto mb-4'>
            <p className='text-primary text-lg font-bold'>{data.desc}</p>
          </div>
          <h1 className='text-white'>
            {data.title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero2
'use client'
import React from 'react'
import { Video } from '@/app/types/destinationdata'

interface VideosProps {
  videos: Video[]
  title?: string
  subtitle?: string
}

const Videos = ({ videos, title = 'VIDEOS', subtitle = 'Explora en video' }: VideosProps) => {
  return (
    <section className="py-16 px-4">
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='text-primary text-xl font-normal tracking-widest'>
            {title}
          </p>
          <h2 className='font-bold mt-4'>{subtitle}</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {videos.map((video, i) => (
            <div key={i} className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div 
                className='w-full aspect-video'
                dangerouslySetInnerHTML={{ 
                  __html: video.iframe.replace(
                    'width="560" height="315"', 
                    'width="100%" height="100%" style="border-radius: 8px 8px 0 0;"'
                  )
                }}
              />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{video.title}</h3>
                {video.description && (
                  <p className='text-gray-600'>{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Videos
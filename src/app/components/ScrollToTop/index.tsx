'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMessage, setShowMessage] = useState(true)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-8 z-999'>
      {isVisible && (
        <div className='fixed bottom-8 right-8 z-999'>
          <div className='flex flex-col items-end gap-2'>
            {showMessage && (
              <div className='hidden lg:flex items-center gap-2 bg-green-100  shadow-lg rounded-lg p-3 pr-2'>
                <span className='text-sm font-medium text-gray-800 whitespace-nowrap'>
                  ¡Hablemos de tus <br />Próximas Vacaciones!
                </span>
                <button
                  onClick={() => setShowMessage(false)}
                  className='text-gray-400 hover:text-gray-600 p-1'
                  aria-label='Cerrar mensaje'>
                  <Icon icon='mdi:close' width='20' height='20' />
                </button>
              </div>
            )}
            <Link
              href='https://wa.me/573001234567'
              target='_blank'
              className='hidden lg:block bg-green-500 text-white hover:bg-green-600 p-3 rounded-[50px]'>
              <Icon icon='mdi:whatsapp' width='50' height='50' />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

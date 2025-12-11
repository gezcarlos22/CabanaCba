'use client'
import React from 'react'
import ContactForm from '../Contact'

const Join = () => {
  return (
    <section className='overflow-hidden' id='Contacto'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <div className='mx-auto py-2 px-5 bg-primary/15 rounded-full w-fit'>
              <p className='text-center text-primary text-lg font-bold tracking-widest uppercase'>
                Contacto
              </p>
            </div>
          <h2 className='my-6'>Reservá Ahora tu Estadía</h2>
        </div>
        <ContactForm/>
      </div>
    </section>
  )
}
export default Join

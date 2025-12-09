'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* COLUMN-1 */}
          <div className="relative rounded-3xl bg-[url('/images/beliefs/las_rosas.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden min-h-[400px]">
            <div className='absolute inset-0 bg-black/40 rounded-3xl'></div>
            <div className='relative z-10 flex flex-col justify-center items-center h-full px-8 py-10 space-y-6'>
              <p className='text-lg font-normal text-white tracking-widest text-center uppercase'>
                destino
              </p>
              <h3 className='text-white text-center'>
                <span className='text-primary'>Villa De Las Rosas: </span>
                Sabores, Cultura y Encanto Artesanal
              </h3>
              <Link
                href='#'
                className='text-xl py-5 px-14 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                CONOCE MÁS
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="relative rounded-3xl bg-[url('/images/beliefs/villa_dolores.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden min-h-[400px]">
            <div className='absolute inset-0 bg-black/40 rounded-3xl'></div>
            <div className='relative z-10 flex flex-col justify-center items-center h-full px-8 py-10 space-y-6'>
              <p className='text-lg font-normal text-white tracking-widest text-center uppercase'>
                destino
              </p>
              <h3 className='text-white text-center'>
                <span className='text-primary'>Villa Dolores: </span>Compras, Historia y el Polo Comercial
              </h3>
              <Link
                href='#'
                className='text-xl py-5 px-14 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                CONOCE MÁS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs

'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <div className='mx-auto py-2 px-5 bg-primary/15 rounded-full w-fit'>
            <p className='text-center text-primary text-lg font-bold tracking-widest uppercase'>
              Preguntas
            </p>
          </div>
          <h2 className='text-white text-center max-w-3xl mx-auto'>
            Preguntas frecuentes
          </h2>
          <div className='w-full px-4 pt-16'>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        ¿Qué información necesitan para solicitar una reserva?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black font-normal text-left pt-4 mt-6 border-t border-border'>
                      <div className='lg:max-w-80%'>
                        Para cotizar y solicitar una reserva, requerimos los siguientes datos: 
                        <b> Nombre completo, datos de identidad y contacto del huésped titular, fechas exactas de entrada y salida deseadas, y la cantidad total de personas</b> (adultos y menores) que se alojarán. 
                        Con esa información le enviaremos el presupuesto exacto.
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        ¿Cuál es la política si deseo anular o modificar las fechas de mi reserva?
                        </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black pt-4 mt-6 text-left border-t border-border'>
                      <div className='lg:max-w-80%'>
                        Para confirmar la reserva, se solicita <b>el abono de una seña</b>. En caso de anulación, esta seña no es reembolsable. 
                        Sin embargo, si necesita modificar la fecha de su estadía, la seña abonada será considerada y aplicada a la nueva reserva, siempre sujeta a disponibilidad.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>¿Permiten mascotas en la cabaña?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black pt-4 mt-6 font-normal text-left border-t border-border'>
                      <div className='lg:max-w-80%'>
                        Sí, se aceptan mascotas, siempre que el <b>huésped se haga responsable por su limpieza y cuidado dentro de las instalaciones</b>. 
                        Agradecemos mantener el orden y la higiene para asegurar la buena convivencia.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

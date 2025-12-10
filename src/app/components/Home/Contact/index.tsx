'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const reset = () => {
    formData.firstname = ''
    formData.lastname = ''
    formData.email = ''
    formData.phnumber = ''
    formData.Message = ''
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    fetch('https://formsubmit.co/ajax/arshvasani9@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        Name: formData.firstname,
        LastName: formData.lastname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }

        reset()
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }
  return (
    <div id='contact'>
      <div className='container'>
        <div className='relative'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='lg:w-1/2'>
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='mx-0 my-2.5'>
                  <label htmlFor='fname' className='pb-3 inline-block text-base'>
                    Nombre
                  </label>
                  <input
                    id='fname'
                    type='text'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder='Juan'
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
                <div className='mx-0 my-2.5'>
                  <label htmlFor='lname' className='pb-3 inline-block text-base'>
                    Apellido
                  </label>
                  <input
                    id='lname'
                    type='text'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder='Pérez'
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
                <div className='mx-0 my-2.5'>
                  <label htmlFor='email' className='pb-3 inline-block text-base'>
                    Correo Electrónico
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='correo@ejemplo.com'
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
                <div className='mx-0 my-2.5'>
                  <label htmlFor='Phnumber' className='pb-3 inline-block text-base'>
                    Número de Teléfono
                  </label>
                  <input
                    id='Phnumber'
                    type='tel'
                    name='phnumber'
                    placeholder='+1234567890'
                    value={formData.phnumber}
                    onChange={handleChange}
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
                <div className='mx-0 my-2.5'>
                  <label htmlFor='message' className='text-base inline-block pb-3'>
                    Mensaje
                  </label>
                  <textarea
                    id='message'
                    name='Message'
                    value={formData.Message}
                    onChange={handleChange}
                    className='w-full rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                    placeholder='¿Algo más que quieras comunicarnos?'
                    rows={4}></textarea>
                </div>
                <div className=' flex mx-0 my-2.5 justify-center'>
                  <button
                    type='submit'
                    disabled={!isFormValid || loader}
                    className={`border leading-none px-6 text-lg font-medium py-4 rounded-full 
                    ${
                      !isFormValid || loader
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                    }`}>
                    Enviar Mensaje
                  </button>
                </div>
              </form>
              {showThanks && (
                <div className='text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-1 flex items-center gap-2'>
                  ¡Gracias por contactarnos! Te responderemos pronto.
                  <div className='w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent'></div>
                </div>
              )}
            </div>
            <div className='lg:w-1/2'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3392.578578790391!2d-65.00395391191532!3d-31.75470199227001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDQ1JzE2LjkiUyA2NcKwMDAnMDkuMiJX!5e0!3m2!1ses-419!2sus!4v1765389037844!5m2!1ses-419!2sus"
                width='100%'
                height='100%'
                style={{ border: 0, minHeight: '500px', borderRadius: '1rem' }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

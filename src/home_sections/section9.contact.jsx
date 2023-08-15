import React, { useState } from 'react'

import phone from '/src/assets/icons/contactForm/icon-telefono.svg'
import email from '/src/assets/icons/contactForm/icon-mail.svg'
import soporte from '/src/assets/icons/contactForm/soporte.svg'

import ContactForm from '../atoms/ContactForm'
export default function ContactSection() {

  return (
    <div className='flex justify-center flex-col grid relative pt-[70px] lg:pt-0 items-center pb-12'>
      <span className='shadow-light absolute left-[-50%]'></span>
      <span className='shadow-light absolute right-[-50%]'></span>

      <div className="grid w-full lg:col-span-1 col-span-2 grid-cols-2 max-w-[1300px] sm:p-[50px] lg:mb-[50px] p-[20px] z-10">
        <div className="col-span-2 px-5 lg:col-span-1 ">
          <h2 className='text-4xl'> Contactanos</h2>
          <p className='font-bold tracking-wide pt-2'>
            Estamos para ayudarte
          </p>
          <p className="font-light tracking-wide max-w-[370px] pt-2">
            Si te gustaría recibir asesoramiento, no dudes en contactarnos.
          </p>
          <p className="font-light tracking-wide max-w-[370px] pt-2">
            Podés completar este formulario o comunicarte con nosotros telefónicamente o por e-email.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10 sm:mt-[35px]">
            <div className="flex col-span-2 sm:col-span-1">
              <span className="min-w-[40px] max-h-[40px] bg-lb rounded-full flex justify-center items-center">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5.11035C8.49937 5.11035 8.00997 5.25881 7.59371 5.53694C7.17745 5.81508 6.85301 6.21041 6.66143 6.67293C6.46985 7.13546 6.41972 7.64441 6.51739 8.13542C6.61506 8.62644 6.85613 9.07746 7.21014 9.43147C7.56414 9.78547 8.01516 10.0265 8.50618 10.1242C8.99719 10.2219 9.50614 10.1718 9.96867 9.98017C10.4312 9.78859 10.8265 9.46415 11.1047 9.04789C11.3828 8.63163 11.5312 8.14224 11.5312 7.6416C11.5312 6.97027 11.2646 6.32644 10.7899 5.85174C10.3152 5.37704 9.67133 5.11035 9 5.11035ZM9 9.61035C8.61062 9.61035 8.22998 9.49489 7.90622 9.27856C7.58246 9.06223 7.33012 8.75475 7.18111 8.39501C7.0321 8.03527 6.99311 7.63942 7.06908 7.25752C7.14504 6.87562 7.33255 6.52482 7.60788 6.24949C7.88322 5.97415 8.23402 5.78664 8.61592 5.71068C8.99782 5.63472 9.39367 5.6737 9.75341 5.82271C10.1131 5.97172 10.4206 6.22406 10.637 6.54782C10.8533 6.87158 10.9688 7.25222 10.9688 7.6416C10.9688 7.90014 10.9178 8.15615 10.8189 8.39501C10.7199 8.63387 10.5749 8.8509 10.3921 9.03372C10.2093 9.21653 9.99227 9.36155 9.75341 9.46049C9.51455 9.55943 9.25854 9.61035 9 9.61035ZM9 1.73535C7.43408 1.73703 5.93277 2.35983 4.8255 3.4671C3.71823 4.57438 3.09543 6.07568 3.09375 7.6416C3.09375 9.78051 4.09008 12.0565 5.97656 14.2243C6.82999 15.2104 7.79051 16.0985 8.84039 16.8722C8.88761 16.9052 8.94381 16.9229 9.00141 16.9229C9.059 16.9229 9.1152 16.9052 9.16242 16.8722C10.2113 16.0984 11.1709 15.2103 12.0234 14.2243C13.9085 12.0565 14.9062 9.78051 14.9062 7.6416C14.9046 6.07568 14.2818 4.57438 13.1745 3.4671C12.0672 2.35983 10.5659 1.73703 9 1.73535ZM11.6086 13.8453C10.8228 14.7452 9.94893 15.5642 9 16.29C8.05094 15.5633 7.17705 14.7434 6.39141 13.8425C5.14336 12.4088 3.65625 10.1658 3.65625 7.6416C3.65625 6.22435 4.21925 4.86515 5.2214 3.863C6.22355 2.86085 7.58275 2.29785 9 2.29785C10.4173 2.29785 11.7765 2.86085 12.7786 3.863C13.7807 4.86515 14.3438 6.22435 14.3438 7.6416C14.3438 10.1658 12.8566 12.4088 11.6086 13.8453Z" fill="white" />
                </svg>

              </span>
              <div className='ps-4'>
                <h2 className='text-xl'>Ubicación</h2>
                <p className='font-light'>Mariano Fragueiro 585
                  1er.piso -Oficina “K”, Córdoba.</p>
              </div>
            </div>
            <div className="flex col-span-2 sm:col-span-1">
              <span className="min-w-[40px] max-h-[40px] bg-lb rounded-full flex justify-center items-center">
                <img src={phone} alt="" />
              </span>
              <div className='ps-4'>
                <h2 className='text-xl'>Teléfono</h2>
                <p className='font-light'>+54 351 3 91-0592</p>
              </div>
            </div>
            <div className="flex col-span-2 sm:col-span-1">
              <span className="min-w-[40px] max-h-[40px] bg-lb rounded-full flex justify-center items-center">
                <img src={email} alt="" />
              </span>
              <div className='ps-4'>
                <h2 className='text-xl'>Correo electrónico</h2>
                <p className='font-light'>alexismaffini@gmail.com</p>
              </div>
            </div>
            <div className="flex col-span-2 sm:col-span-1">
              <span className="min-w-[40px] max-h-[40px] bg-lb rounded-full flex justify-center items-center">
                <img src={soporte} alt="" />
              </span>
              <div className='ps-4'>
                <h2 className='text-xl'>Soporte general</h2>
                <p className='font-light'>grupogester@gmail.com
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="col-span-2 mt-5 lg:mt-0 lg:col-span-1 px-[20px] md:pt-0 pt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

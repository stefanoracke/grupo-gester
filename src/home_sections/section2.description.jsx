import React from 'react'

import casa from '/src/assets/icons/casa.svg'
import new_bus from '/src/assets/icons/new_bussiness.svg'
import circle from '/src/assets/icons/circle.svg'

export default function DescriptionSection() {
  const cards = [
    {
      sizeIcon: '30px',
      title: 'Salvatajes en desarrollos inmobiliarios',
      description: 'Fideicomisos en crisis, o escisiones societarias',
      icon: casa
    },
    {

      sizeIcon: '30px',
      title: 'Desarrollos de nuevos negocios',
      description: 'Ya sean financieros o inmobiliarios ',
      icon: new_bus
    },
    {

      sizeIcon: '30px',
      title: 'Divisiones societarias',
      description: 'Empresas familiares, conciliaciones y acuerdos',
      icon: circle
    },
  ]
  return (
    <div className="w-full h-full flex justify-center items-center py-[30px]  sm:py-[150px] overflow-x-auto">
      <article className='grid-cols-3 grid rounded-[10px] px-[40px] bg-white'>
        {
          cards.map((card, index) => (
            <div className='col-span-3 md:col-span-1 max-w-[320px]  text-primary'
              key={`description-${index}`}>

              <article

                className={`w-full h-full   flex  flex-col items-center py-[30px] px-[15px]   `}
              >
                <img className='p-3 mb-4' src={card.icon} alt="" />
               
                <div className="max-w-[200px]">
                  <h2
                    className={`text-md text-center `}
                    style={{ fontWeight: 'bolder' }}>
                    {card.title}
                  </h2>
                  <h2
                    className={`text-light text-center text-md`}
                    style={{ fontWeight: '400' }}>
                    {card.description}
                  </h2>
                </div>

              </article>
            </div>
          ))
        }
      </article>
    </div>
  )
}

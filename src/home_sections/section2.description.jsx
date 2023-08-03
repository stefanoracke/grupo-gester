import React from 'react'
import MainCards from '../atoms/mainCards'
import NavLogo from '../atoms/Icons/NavLogo'
import GesterLogo from '../atoms/Icons/GesterLogo'

export default function DescriptionSection() {
  const cards = [
    {
      sizeIcon: '30px',
      title: 'Salvatajes en desarrollos inmobiliarios',
      description: 'Fideicomisos en crisis, o escisiones societarias',
      icon: <GesterLogo size={20} />
    },
    {
     
      sizeIcon: '30px',
      title: 'Desarrollos de nuevos negocios',
      description: 'Ya sean financieros o inmobiliarios ',
      icon: <GesterLogo size={20} />
    },
    {
     
      sizeIcon: '30px',
      title: 'Divisiones societarias',
      description: 'Empresas familiares, conciliaciones y acuerdos',
      icon: <GesterLogo size={20} />
    },
  ]
  return (
    <div className="w-full h-full flex justify-center items-center py-[30px] sm:py-[150px] overflow-x-auto">
      <article className='grid-cols-3 grid gap-8 min-w-[1100px]'>
        {
          cards.map((card, index) => (
            <div className='span-col-1 max-w-[320px] text-white'
            key={`description-${index}`}>

              <MainCards
                
                index={index}
                sizeIcon={card.sizeIcon}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </div>
          ))
        }
      </article>
    </div>
  )
}

import React from 'react'
import img from './../assets/img-bg-banner.jpg'
import BoxWhite from '../atoms/BoxWhite'
import LlavesIcon from '../atoms/Icons/Llaves'
import PeopleIcon from '../atoms/Icons/People'
import MoneyIcon from '../atoms/Icons/Money'

export default function SuccessCasesSection() {

  const cards = [
    {
      icon: <LlavesIcon />,
      number: 20,
      step:1,
      text: 'Unidades habitacionales salvadas'
    },
    {
      icon: <PeopleIcon />,
      number: 20,
      step:1,
      text: 'Personas asistida por nuestro equipo'
    },
    {
      icon: <LlavesIcon />,
      number: 200,
      step:10,
      text: 'Millones de dólares recuperados'
    },
  ]

  return (
    <div className='py-[200px] flex justify-center  relative'>
      <div className="bg-successCases absolute w-full h-full object-cover top-0" style={{ zIndex: 2 }}></div>
      <div className="bg-successCases2 absolute w-full h-full object-cover top-0" style={{ zIndex: 3 }}></div>
      <img className='absolute w-full h-full object-cover top-0' src={img} alt="" />
      <div className="z-10 w-full flex justify-center">
        <div className="grid grid-cols-3 gap-5 justify-items-center items-center px-4">
          {
            cards.map((card, index) => 
             ( <div className="col-span-3 sm:col-span-1 flex w-full"
              key={index+'cardSuccess'}>
                <BoxWhite
                  icon={card.icon}
                  number={card.number}
                  text={card.text}
                  step={card.step}
                />
              </div>)
            )
          }
        </div>
      </div>
    </div>
  )
}

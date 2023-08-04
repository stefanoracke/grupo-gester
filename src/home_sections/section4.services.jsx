import React from 'react'
import MainCards from '../atoms/mainCards'
import gif1 from '/src/assets/Gifs/gif1.gif'
import gif2 from '/src/assets/Gifs/gif2.gif'
import gif3 from '/src/assets/Gifs/gif3.gif'
import gif4 from '/src/assets/Gifs/gif4.gif'

export default function ServicesSection() {

  const cards = [
    {
      sizeIcon: '80px',
      title: 'Resguardar tus bienes y derechos',
      description: 'Eliminamos la incertidumbre empresarial, brindandote soporte y monitoreo de los procesos en tiempo real.',
      icon: gif1
    },
    {
      sizeIcon: '80px',
      title: 'Recuperar tu inversión',
      description: 'Nos encargamos de gestionar los procedimientos legales, técnicos y gerenciales necesarios para que recuperes parcial o totalmente tu inversión.',
      icon: gif2
    },
    {
      sizeIcon: '80px',
      title: 'Gestar soluciones estratégicas',
      description: 'Asumimos tus desafíos como propios y nos involucramos en equipo con seriedad y profesionalismo.',
      icon: gif3
    },
    {
      sizeIcon: '80px',
      title: 'Acercarte a tu inmueble',
      description: 'Realizamos Salvatajes y Desarrollos Inmobiliarios, ofreciendo opciones viables para que accedas a tu inmueble lo más pronto posible.',
      icon:gif4
    },
  ]

  return (
    <div className='py-[150px]  flex justify-center flex-col px-[20px] sm:px-[4rem] md:px-[15vw] items-center bg-services'>
      <h3 className="text-4xl text-center">Lo que hacemos</h3>
      <p className="text-xl pt-2 text-center">todo los días para materializar tus objetivos</p>
      <div className="grid grid-cols-2 s gap-5 pt-[50px] text-primary sm:max-w-[1000px]">
         {
          cards.map((card,index)=>(
            <div 
            key={'card-services-' + index}
            className="col-span-2 sm:col-span-1 h-[350px]">
                <MainCards
                cardSize={'big'}
                description={card.description}
                icon={card.icon}
                sizeIcon={card.sizeIcon}
                title={card.title}
                
                />
            </div>
          ))
         }
      </div>
    </div>
  )
}

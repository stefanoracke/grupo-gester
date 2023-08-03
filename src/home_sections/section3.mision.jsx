import React, { useState } from 'react'
import MisionCards from '../atoms/MisionCards'
import GesterLogo from '../atoms/Icons/GesterLogo'

export default function MisionSection() {
  const [active, setActive] = useState(0)
  const cards = [
    {
      title: 'Quiénes somos',
      textColor:null,
      icon: <GesterLogo size={20}/>,
      bgColor: 'linear-gradient(90deg, #186B99 0%, #22A5AB 100%)',
      text1: 'Un equipo interdisciplinario listo para accionar. Acompañamos y gestionamos Salvatajes y Desarrollos Inmobiliarios, ayudando a empresas y familias en la recuperación de inmuebles e inversiones.',
      text2: '<strong>Creemos que existe una solución</strong>, aún en casos complejos, por eso nos adentramos de manera profesional y transparente en cada desafío que asumimos.<strong> Te invitamos a que nos conozcas.</strong>'
    },
    {
      title: 'Misión',
      textColor:null,
      icon: <GesterLogo size={20}/>,
      bgColor: '#186B99',
      text1: '<strong>Nos moviliza recuperar el valor de tus inversiones</strong>, poniendo en primer lugar tus necesidades y derechos.',
      text2: 'Por eso, desde 2021 gestionamos soluciones integrales, abordando problemáticas inmobiliarias y financieras complejas, con más de 200 casos de éxito. '
    },
    {
      title: 'Visión',
      textColor:null,
      icon: <GesterLogo size={20}/>,
      bgColor: '#0F206C',
      text1: '<strong>No creemos en casos perdidos</strong>. Nos motiva saber que de manera integral y en equipo podemos dar respuesta a situaciones complejas.',
      text2: 'Por eso <strong>nos dedicamos a gestar soluciones</strong>, con el compromiso y la satisfacción de acercar a más personas y empresas a su objetivo.'
    },
    {
      title: 'Valores',
      textColor:'#0F206C',
      icon: <GesterLogo size={20}/>,
      bgColor: '#ffffff',
      text1: 'Estamos comprometidos desde la transparencia en la gestión de cada cliente. Nos motiva ser una <strong>garantía seria y profesional</strong>, para que transformes un desafío en un objetivo alcanzado.',
      text2: null
    },
    
  ]

  const handleChange = (value) => {
    setActive(value)
  }

  return (
    <div className='w-full    pb-[15vh] flex'>
      <div className="px-[10rem] w-full h-full overflow-hidden items-center flex justify-center flex-col relative">
        <div className="w-fit ">

          <h2 className="text-3xl text-secondary">
            Nuestra misión
          </h2>
          <div className="flex w-fit pt-[60px] gap-8">
            {
              cards.map((card, index) => (
                <MisionCards
                  key={`mision-${index}`}
                  currentActive={active}
                  index={index}
                  bgColor={card.bgColor}
                  textColor = {card.textColor}
                  handleClick={handleChange}
                  title={card.title}
                  icon={card.icon}
                  text1={card.text1}
                  text2={card.text2}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

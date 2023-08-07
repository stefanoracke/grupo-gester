import React, { useState, useEffect } from 'react'
import MisionCards from '../atoms/MisionCards'
import quienes from '/src/assets/icons/icon-quienes-mision.svg'
import mision from '/src/assets/icons/icon-mision-mision.svg'
import valores from '/src/assets/icons/icon-valores-mision.svg'
import vision from '/src/assets/icons/icon-vision-mision.svg'
import MisionCardsMobile from '../atoms/MisionCardsMobile'

export default function MisionSection() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const cards = [
    {
      title: 'Quiénes somos',
      textColor:null,
      icon: quienes,
      bgColor: 'linear-gradient(90deg, #186B99 0%, #22A5AB 100%)',
      text1: 'Un equipo interdisciplinario listo para accionar. Acompañamos y gestionamos Salvatajes y Desarrollos Inmobiliarios, ayudando a empresas y familias en la recuperación de inmuebles e inversiones.',
      text2: '<strong>Creemos que existe una solución</strong>, aún en casos complejos, por eso nos adentramos de manera profesional y transparente en cada desafío que asumimos.<strong> Te invitamos a que nos conozcas.</strong>'
    },
    {
      title: 'Misión',
      textColor:null,
      icon: mision,
      bgColor: '#186B99',
      text1: '<strong>Nos moviliza recuperar el valor de tus inversiones</strong>, poniendo en primer lugar tus necesidades y derechos.',
      text2: 'Por eso, desde 2021 gestionamos soluciones integrales, abordando problemáticas inmobiliarias y financieras complejas, con más de 200 casos de éxito. '
    },
    {
      title: 'Visión',
      textColor:null,
      icon: vision,
      bgColor: '#0F206C',
      text1: '<strong>No creemos en casos perdidos</strong>. Nos motiva saber que de manera integral y en equipo podemos dar respuesta a situaciones complejas.',
      text2: 'Por eso <strong>nos dedicamos a gestar soluciones</strong>, con el compromiso y la satisfacción de acercar a más personas y empresas a su objetivo.'
    },
    {
      title: 'Valores',
      textColor:'#0F206C',
      icon: valores,
      bgColor: '#ffffff',
      text1: 'Estamos comprometidos desde la transparencia en la gestión de cada cliente. Nos motiva ser una <strong>garantía seria y profesional</strong>, para que transformes un desafío en un objetivo alcanzado.',
      text2: null
    },
    
  ]

  const handleChange = (value) => {
    if(isMobile){

      if(value == active) setActive(null)
      else setActive(value)
    }else{
      setActive(value)
    }
  }


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full pb-[15vh] pt-0 sm:pt-[10vh] flex'>
      <div className="px-4 sm:px-[10rem] w-full h-full overflow-hidden items-center flex justify-center flex-col relative">
        <div className="w-full sm:w-fit ">

          <h2 className="text-3xl text-secondary">
            Nuestra misión
          </h2>
          <div className="hidden sm:flex w-fit pt-[60px] gap-8">
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
          <div className="flex-col flex gap-4 sm:hidden">
            {
              cards.map((card,index)=>(
                <MisionCardsMobile
                key={index}
                card={{...card,index:index}}
                handleClick={handleChange}
                currentActive={active}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

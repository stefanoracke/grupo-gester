import React, {useRef} from 'react'
import './NosotrosCards.css'

export default function NosotrosCards({ persona, delay = '0' }) {

  return (
    <div data-aos="zoom-in"
    data-aos-duration="1500"
    data-aos-delay={delay}
     className='w-[300px] nosotros-card h-[450px] relative rounded-[15px] overflow-hidden bg-nosotros1 relative'>
      <div className='flex  p-[35px] h-full w-full'>
      <div className='bg-nosotros1 w-full h-full absolute left-0 top-0 z-10'></div>
        <img src={persona.img} alt="" className='absolute w-full h-full object-cover top-0 left-0 img-nosotros transform ' />
        <div className='relative pt-[300px] fadeIn delay-05 flex flex-col w-full onhover  z-20'>

          <h2 className='text-center'>{persona.name}</h2>
          <h2 className='text-center'>{persona.cargo}</h2>
        </div>
      </div>
      <div  className='w-[300px] second-card  h-[450px] relative rounded-[15px] overflow-hidden absolute z-10 top-0'>
        <div className='flex  p-[35px] h-full w-full'>
          <div className='bg-nosotros2 w-full h-full absolute left-0 top-0 z-10'></div>
          {/* <img src={persona.img} alt="" className='absolute w-full bg-nosotros2 h-full object-cover top-0 left-0'/> */}
          <div className='relative justify-end pb-3 flex flex-col w-full z-20'>

            <h2 className='text-center'>{persona.titulo}</h2>
            {
              persona.others.map((cargo, index)=>(

                <p key={'cargo'+index} className='text-center font-light text-light pt-2'>{cargo}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

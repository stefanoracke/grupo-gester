import React, { useState } from 'react'

import ImgContainer from './imgContainer'

import slide1 from '/src/assets/slides/2.png'
import slide2 from '/src/assets/slides/1.png'
import slide3 from '/src/assets/slides/3.png'

export default function SliderAtom() {
    const [active,setActive] = useState(1)

    const slides  = [
        
            {
                name: 'Edificio Tower Sur',
                text: 'Obra culminada en Septiembre de 2022.',
                image: slide1
            },
            {
                name: 'Torre Flus',
                text: 'Obra culminada en Diciembre de 2022.',
                image: slide2
            },
            {
                name: 'ODOGAN',
                text: 'Fecha de Finalización: Junio 2023.',
                image: slide3
            }    
    ]
    return (
    <div className='w-full relative '>
        <div className="w-[120%] pt-20 flex transform gap-10 translate-x-[-8%]">
             <ImgContainer active={false} slide={slides[0]}/>
             <ImgContainer active={true} slide={slides[1]}/>
             <ImgContainer active={false} slide={slides[2]}/>
        </div>
    </div>
  )
}

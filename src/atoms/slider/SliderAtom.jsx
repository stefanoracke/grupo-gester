import React, { useState, useRef } from 'react'

import ImgContainer from './imgContainer'

import slide1 from '/src/assets/slides/2.png'
import slide2 from '/src/assets/slides/1.png'
import slide3 from '/src/assets/slides/3.png'
import './slider-custom.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MyTransition } from './transiton'

export default function SliderAtom() {


    const slides = [

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
    const [activeIndex, setActiveIndex] = useState(); // Keep track of active slide index
    const splideRef = useRef(null);

    const handleSlideChange = (splide) => {
        const activeIndex = splide.index;
        setActiveIndex(activeIndex);
    };

    return (
        <div className='w-full relative cursor-grab'>
            <Splide
                options={{
                    rewind: true,
                    gap: '3rem',
                    perPage: 3,
                    focus: 1,
                    omitEnd: true,
                    autoplay: true,
                    pauseOnHover: false,
                    pauseOnFocus: true,
                    type: 'loop',
                    
                    
                }}
                aria-label="My Favorite Images"
                ref={splideRef}
                onMoved={handleSlideChange}
                className="splide-fade-transition"
            >
                {
                    slides.map((slide, index) => (

                        <SplideSlide key={'slide' + index}>
                            <div className="flex justify-center">

                                <ImgContainer active={index === activeIndex} slide={slide} />
                            </div>
                        </SplideSlide>
                    ))
                }


            </Splide>

        </div>
    )
}

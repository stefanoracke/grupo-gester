import React, { useState, useRef, useEffect } from 'react'

import ImgContainer from './imgContainer'

import slide1 from '/src/assets/slides/2.png'
import slide2 from '/src/assets/slides/1.png'
import slide3 from '/src/assets/slides/3.png'
import './slider-custom.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MyTransition } from './transiton'
import ModalYT from '../modalYT/ModalYT'
import ButtonGrey from '../ButtonGrey'
import ArrowIcon from '/src/assets/icons/icon-flecha.svg'
import TowerSur from '../modalYT/TowerSur'
import TorreFlus from '../modalYT/TorreFlus'
import Odogan from '../modalYT/Odogan'



export default function SliderAtom() {
    

    const slides = [

        {
            name: 'Edificio Tower Sur',
            text: 'Obra culminada en Septiembre de 2022.',
            image: slide1,
            video: <TowerSur />
        },
        {
            name: 'Torre Flus',
            text: 'Obra culminada en Diciembre de 2022.',
            image: slide2,
            video: <TorreFlus />
        },
        {
            name: 'ODOGAN',
            text: 'Fecha de Finalización: Junio 2023.',
            image: slide3,
            video: <Odogan />
        }
    ]
    const [activeIndex, setActiveIndex] = useState(1); // Keep track of active slide 
    const [indexOpen, setIndexOpen] = useState(0)
    const splideRef = useRef(null);
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(false)
    }

    const openModal = () => {
        setIndexOpen(activeIndex)
        setOpen(true)
    }



    const handleSlideChange = (splide, index, prevIndex) => {
        setActiveIndex(index);
    };

    const handleSlideClick = () => {
        // Advance to the next slide when a SplideSlide is clicked
        const nextIndex = (activeIndex + 1) % slides.length;
        setActiveIndex(nextIndex);
        splideRef.current.go(nextIndex);
    };




    return (
        <div className='w-full relative cursor-grab'>
            <Splide
                options={{
                    rewind: true,
                    gap: '3rem',
                    perPage: 3,
                    focus: 1,
                    perMove: 1,
                    autoplay: true,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    type: 'loop',
                    arrows: false

                }}
                aria-label="My Favorite Images"
                ref={splideRef}
                onMove={handleSlideChange}
                className="splide-fade-transition"
            >
                {
                    slides.map((slide, index) => (

                        <SplideSlide onClick={() => { handleSlideClick }} key={'slide' + index}>
                            <div className="flex cursor-grab justify-center">

                                <ImgContainer active={index === activeIndex} slide={slide} />
                            </div>
                        </SplideSlide>
                    ))
                }


            </Splide>
            <div className="pt-8 flex justify-center">
                <ButtonGrey
                    icon={ArrowIcon}
                    text={'Ver video'}
                    onClick={openModal}
                />
            </div>
            {
                open &&
            <ModalYT onClick={handleClick} iframe={slides[indexOpen].video} ></ModalYT>
            }
        </div>
    )
}

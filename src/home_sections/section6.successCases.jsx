import React, { useRef, useState, useEffect } from 'react'
import img from './../assets/img-bg-banner.jpg'
import BoxWhite from '../atoms/BoxWhite'
import LlavesIcon from '../atoms/Icons/Llaves'
import PeopleIcon from '../atoms/Icons/People'
import MoneyIcon from '../atoms/Icons/Money'

export default function SuccessCasesSection() {

  const [handleStart, setStart] = useState(false)
  const divRef = useRef()

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log('The target div is in view');
      // You can perform actions when the div is in view
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (divRef.current) {
      observer.observe(divRef.current);
      setStart(true)

    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

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
    <div ref={divRef} className='py-[200px] flex justify-center  relative'>
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
                  start={handleStart}
                />
              </div>)
            )
          }
        </div>
      </div>
    </div>
  )
}

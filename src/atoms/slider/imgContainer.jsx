import React from 'react'
import ButtonGrey from '../ButtonGrey'
import ArrowIcon from '/src/assets/icons/icon-flecha.svg'
import Triangle from '../Icons/Triangle'

export default function ImgContainer({ active, slide }) {
    return (
        <div className='w-full'>
            <div  className="relative w-full transition-all duration-500"  style={{ transform: `${active ? 'scale(1)' : 'scale(.8) translateY(-57px)'}` }}> 

                <img  
                style={{ height: `${active ? 'auto' : '100%'}` }}
                className={`w-full object-cover object-bottom hover:cursor-pointer`} 
                src={slide.image} 
                alt="" />
                <div className="bg-primary flex h-[25px] left-[-1px] bottom-[-1px] w-[48%] absolute">
                    <Triangle size={'25px'} className={'triangle-rectangle h-[25px] w-[25px] absolute top-0 left-[calc(100%-1px)]'}/>
                </div> 
            </div>
            {
                active &&
                <div className='pt-6 fadeIn'>
                    <h3 className='text-center pt-5'>{slide.name}</h3>
                    <p className="font-lighter text-center">{slide.text}</p>
                    <div className="pt-4 flex justify-center">
                        <ButtonGrey
                            icon={ArrowIcon}
                            text={'Ver video'}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

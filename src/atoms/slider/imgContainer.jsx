import React from 'react'
import ButtonGrey from '../ButtonGrey'
import ArrowIcon from '../Icons/Arrow'
import Triangle from '../Icons/Triangle'

export default function ImgContainer({ active, slide }) {
    return (
        <div className='w-[33%]'>
            <div  className="relative w-full"  style={{ height: `${active ? 'auto' : '55%'}` }}> 

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
                <div className='pt-6'>
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

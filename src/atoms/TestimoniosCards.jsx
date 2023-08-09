import React from 'react'

import Triangle from './Icons/Triangle'

export default function TestimoniosCards({ testimonio }) {

    return (
        <article className='rounded-[5px] bg-primary relative w-[340px] overflow-hidden flex flex-col'>
            <div className="absolute top-0 right-0 select-none z-10 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="172" height="428" viewBox="0 0 172 428" fill="none">
                    <path opacity="0.35" d="M524.772 54.4898C529.142 13.4153 529.646 -32.7279 524.604 -84.8138H75.5232C38.3799 304.957 300.064 373.997 300.064 373.997C300.064 373.997 438.216 337.641 499.562 168.1L437.544 168.624C393.174 285.905 300.064 300.937 300.064 300.937C300.064 300.937 125.608 264.232 137.036 -15.599H463.091C464.435 15.1632 462.922 40.1574 461.914 54.6646H209.306C203.928 206.902 300.064 235.043 300.064 235.043C300.064 235.043 342.081 221.759 367.963 169.149L299.895 169.673V103.08H582.924C519.73 388.154 299.895 446.358 299.895 446.358C300.232 446.008 -43.8059 355.12 5.10222 -157H595.193C602.924 -76.5989 600.907 -6.33536 592.168 54.4898H524.772Z" fill="url(#paint0_linear_593_1497)" />
                    <defs>
                        <linearGradient id="paint0_linear_593_1497" x1="300.171" y1="-157" x2="300.171" y2="446.358" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.4" />
                            <stop offset="1" stop-color="white" stop-opacity="0.2" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='bg-secondary relative w-full p-[20px] h-[300px] overflow-hidden'>
                <div className='h-[260px] overflow-y-scroll test-text '>
                    <p className='font-light bg-transparent  z-20'
                    data-aos="fade-up"
                    data-aos-duration="1500">
                        {testimonio.text}
                    </p>
                </div>
            </div>
            <div className="bg-primary z-20">

                <div className='bg-button-grey '>
                    <div className="flex items-center h-full p-[20px]">
                        <div className='mr-4 flex h-full relative'>
                            

                                <Triangle size={'15px'} className={'absolute top-[-22px] bg-secondary w-[19px] h-[15px] left-[15px]'}/>
                           
                            <img className='w-[50px] h-[50px] bg-secondary object-cover' src={testimonio.img} alt="" />
                        </div>
                        <div>
                            <p className="font-bold">{testimonio.name}</p>
                            <p className='text-sm font-light'>{testimonio.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

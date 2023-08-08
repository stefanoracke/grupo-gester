import React from 'react'
import video1 from '/src/assets/videoportada-gester.mp4'

export default function HeroSection() {
  return (
    <div className='flex w-full'>
      <div className="video-gradient w-full h-full min-h-[100vh] z-10 absolute left-0"/>
      <div className="w-full  sm:w-50 h-[calc(100vh-106px)] items-center flex-start flex  mt-[106px] z-30">
        <div className="flex flex-col px-[20px] sm:px-[10rem]">

          <h2 className='text-5xl font-semibold' 
           data-aos="zoom-in"
           data-aos-duration="2500">Grupo Gester</h2>
          <h3 className='text-xl font-light'
           data-aos="zoom-in"
           data-aos-duration="1500"
           data-aos-delay="1200">Gestamos soluciones integrales <br/> frente a problemas inmobiliarios complejos.</h3>
        </div>
      </div>
      <video 
      autoPlay
      loop
      src={video1}
      className='absolute top-0 left-0 h-full  pt-[106px] w-full object-cover'
      >
        <source  type="video/mp4"></source>
      </video>
    </div>
  )
}

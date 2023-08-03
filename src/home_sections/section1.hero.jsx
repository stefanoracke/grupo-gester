import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex w-full'>
      <div className="video-gradient w-full h-full min-h-[100vh] z-10 absolute left-0"/>
      <div className="w-full  sm:w-50 h-[calc(100vh-106px)] items-center flex-start flex  mt-[106px] z-30">
        <div className="flex flex-col px-[20px] sm:px-[10rem]">

          <h2 className='text-5xl font-semibold'>Grupo Gester</h2>
          <h3 className='text-xl font-light'>Gestamos soluciones integrales <br/> frente a problemas inmobiliarios complejos.</h3>
        </div>
      </div>
      <video 
      autoPlay
      loop
      className='absolute top-0 left-0 h-full  pt-[106px] w-full object-cover'
      >
        <source src="https://s3-figma-videos-production-sig.figma.com/video/1107046701434361969/TEAM/3f5f/1d23/-cf54-45f3-8ca8-0b4701a4db4c?Expires=1691971200&amp;Signature=nfgu-QvsejNf~jHcDLS91ONkHnQGVg-pyHsCx8-Gnbyc3osmp96dQk8tWkhABIH07XY8y-FYlUCa88qjqd6Flfc9K6jVKYQPjyoYrLUjIRcjhJuj5LlbAsGfL1kONrpZncE63M95gHBaSIKx-z40gntW0gQ7qnFcFNbL3E24TIJEEkuYUZz~PLSsl2-5YMmLIwKKw7QB7DLwgLk~dzcQ8VrWSKRHN1l~WAJVeeRecR1S7OVN2JmlP3SNjksKbHx7PfedA-xsGi3lAiqNSUHfEaFy8gdgZuxle4PZcHeI-IE4tMlTOS1U~x~9It9J0BKiBgua56IRy4asSwXtLynWqg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" type="video/mp4"></source>
      </video>
    </div>
  )
}

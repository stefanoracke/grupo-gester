import React, { useEffect } from 'react'
import NavLogo from './Icons/NavLogo'

export default function Navbar({navActive}) {
   useEffect(()=>{console.log(navActive)},[navActive])

   const styleActive = {textDecoration:'underline', fontWeight:'bold'}
  return (

    <nav className='w-full py-6 px-[6vw] flex justify-between fixed top-0 bg-primary z-40'>
        <div className=''>
            <NavLogo/>
        </div>
        <div className='flex items-center'>
            <ul className='p-0 list-style-none  gap-8 items-end hidden md:flex'>
                <li>
                    <a href="#misionS3" 
                    style={ navActive == 'misionS3' ? {textDecoration:'underline', fontWeight:'bold'} : {} }
                    >
                        Nuestra misión
                    </a>
                </li>
                <li>
                    <a href="#servicesS4"
                     style={ navActive == 'servicesS4' ? {textDecoration:'underline', fontWeight:'bold'} : {} }
                     >
                        Servicios
                    </a>
                </li>
                <li>
                    <a href="#nosotrosS7" 
                    style={ navActive == 'nosotrosS7' ? {textDecoration:'underline', fontWeight:'bold'} : {} }
                    >
                        Equipo
                    </a>
                </li>
                <li>
                    <a href="#testimoniosS8" 
                    style={ navActive == 'testimoniosS8' ? {textDecoration:'underline', fontWeight:'bold'} : {} }
                    >
                        Testimonios
                    </a>
                </li>
                <li>
                    <a href="#contactS9" 
                    style={navActive == 'contactS9' ? { textDecoration:'underline', fontWeight:'bold'}:{}}
                    >
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

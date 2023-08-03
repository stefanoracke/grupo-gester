import React from 'react'
import NavLogo from './Icons/NavLogo'

export default function Navbar() {
  return (
    <nav className='w-full py-6 px-[6vw] flex justify-between fixed top-0 bg-primary z-40'>
        <div className=''>
            <NavLogo/>
        </div>
        <div className='flex items-center'>
            <ul className='p-0 list-style-none  gap-8 items-end hidden md:flex'>
                <li>
                    <a href="#">
                        Nuestra misión
                    </a>
                </li>
                <li>
                    <a href="#">
                        Servicios
                    </a>
                </li>
                <li>
                    <a href="#">
                        Equipo
                    </a>
                </li>
                <li>
                    <a href="#">
                        Testimonios
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

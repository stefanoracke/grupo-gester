import React, { useState } from 'react'
import NavLogo from './Icons/NavLogo'
import Hamburger from './Icons/Hamburger'
import TextEffect from './TextEffect'

export default function Navbar({ navActive }) {
    const [active, setActive] = useState(false)

    const styleActive = { fontWeight: 'bold', color: '#2985B8', paddingBottom: '41px', borderBottom: '3px solid #2985B8' }

    const handleClick = () => {
        setActive(!active)
    }
    return (

        <nav className='w-full py-6 px-[6vw] flex justify-between fixed top-0 bg-primary z-40'>
            <div className=' z-20'>
                <NavLogo />
            </div>
            <div className='flex items-center relative'>
                <div onClick={handleClick} className="absolute right-6 top-2 md:hidden z-20">
                    <Hamburger active={active} />
                </div>
                <article className={`fixed top-0 left-0 w-full h-full lg:hidden bg-primary duration-500 transform ease-in-out ${active ? 'translate-y-[0%]' : 'translate-y-[-100%]'}`}>
                <ul className='p-0 list-style-none flex-col gap-8 items-center justify-center h-full flex'>
                    <li>
                        <a
                            onClick={handleClick}
                            className='transition-all text-[8vw] ease-in-out duration-400'
                            href="#misionS3"
                        >
                            <TextEffect text={'Nuestra Misión'} active={active} />
                           
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={handleClick}
                            className='transition-all text-[8vw] ease-in-out duration-400'
                            href="#servicesS4"
                        >
                             <TextEffect text={'Servicios'} delay='.8s' active={active} />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={handleClick}
                            className='transition-all text-[8vw] ease-in-out duration-400'
                            href="#nosotrosS7"
                            style={navActive == 'nosotrosS7' ? styleActive : {}}
                        >
                            
                            <TextEffect text={'Equipo'} delay='1s' active={active} />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={handleClick}
                            className='transition-all text-[8vw] ease-in-out duration-400'
                            href="#testimoniosS8"
                        >
                            <TextEffect text={'Testimonios'} delay='1.2s' active={active} />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={handleClick}
                            className='transition-all text-[8vw] ease-in-out duration-400' href="#contactS9"
                        >
                            <TextEffect text={'Contacto'} delay='1.4s' active={active} />
                        </a>
                    </li>
                </ul>
                </article>
                <ul className='p-0 list-style-none  gap-8 items-end hidden md:flex'>
                    <li>
                        <a
                            className='transition-all ease-in-out duration-400'
                            href="#misionS3"
                            style={navActive == 'misionS3' ? styleActive : {}}
                        >
                            Nuestra misión
                        </a>
                    </li>
                    <li>
                        <a
                            className='transition-all ease-in-out duration-400'
                            href="#servicesS4"
                            style={navActive == 'servicesS4' ? styleActive : {}}
                        >
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            className='transition-all ease-in-out duration-400'
                            href="#nosotrosS7"
                             style={navActive == 'nosotrosS7' ? styleActive : {}}
                        >
                            Equipo
                        </a>
                    </li>
                    <li>
                        <a
                            className='transition-all ease-in-out duration-400'
                            href="#testimoniosS8"
                             style={navActive == 'testimoniosS8' ? styleActive : {}}
                        >
                            Testimonios
                        </a>
                    </li>
                    <li>
                        <a
                            className='transition-all ease-in-out duration-400' href="#contactS9"
                             style={navActive == 'contactS9' ? styleActive : {}}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

import React from 'react'
import NosotrosCards from '../atoms/NosotrosCards'

export default function Nosotros() {
    const cards = [
        {
            name: 'Alexis Maffini',
            cargo: 'Dirección Ejecutiva',
            titulo: 'Contador público - UNC',
            img: '/src/assets/us/alexis.jpeg',
            others: [
                'Internacional en gestión de proyectos de la construcción.',
                'Universidad de Barcelona. Magister en Dirección de Negocios - MBA - UCC'
            ]
        },
        {
            name: 'Sabrina Zaboyñik',
            cargo: 'Arquitectura e Higiene y Seguridad',
            titulo: 'Lic. en Higiene y Seguridad',
            img: '/src/assets/us/sabrina.png',
            others: [
                'Jefe Mayor de obras'
            ]
        },
        {
            name: 'Karina Borghello',
            cargo: 'Gerente Técnica',
            titulo: 'Arquitecta',
            img: '/src/assets/us/karina.jpeg',
            others: [ 
                ' Directora Técnica'
            ]
        },
        {
            name: 'Cynthia Benavidez',
            cargo: 'Administración',
            titulo: 'Administrativa',
            img: '/src/assets/us/cintya.png',
            others: [
               'Encargada de compras y logística'
            ]
        },

    ]
    return (
        <div className="flex flex-col justify-center items-center py-[200px]">
            <h3 className="text-4xl text-secondary">
                Nuestro Equipo
            </h3>
            <p className='pt-2 max-w-[700px] text-center text-[20px]'>
                <strong>
                    Nos enfocamos en tu asesoría de manera integral. 
                </strong>
                 <span className='pl-2'>Contamos con un equipo de profesionales preparado para resolver conflictos en ambientes legales, técnicos y gerenciales.</span>
            </p>
            <div className="grid grid-cols-4 gap-[20px] mt-[50px]">

                {
                    cards.map((card, index)=>(
                        <div className="col-span-4 sm:col-span-2 lg:col-span-1" key={index+'nosotros'}>
                            <NosotrosCards
                            persona={card}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
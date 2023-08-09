import React from 'react'
import './ModalYT.css'

export default function ModalYT({ iframe, onClick }) {
    return (
        <div onClick={onClick} className="w-full fixed flex justify-center items-center h-full top-0 left-0 z-50">
            <div className="bg-primary absolute opacity-70 top-0 left-0 w-full h-full" onClick={onClick}></div>
            <div  style={{ aspectRatio: 16 / 9 }} className='bg-white z-10 fadeIn duration-500  rounded overflow-hidden'>
              {iframe}
            </div>
        </div>
    )
}

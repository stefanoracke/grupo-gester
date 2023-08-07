import React from 'react'
import useNumberAnimation from './hooks/useNumberAnimation';

export default function BoxWhite({icon, text, number,step, start}) {
    const currentValue = useNumberAnimation(start,number,step);
    return (
        <div className='py-[20px] flex px-[30px] border border-white rounded-[10px] w-full sm:w-[400px] '>
            <div className="flex gap-4">
                <div className="w-[20%] flex justify-center items-center">
                       {icon}
                </div>
                <div className='flex flex-col items-between'>
                    <h2 className="text-4xl">+ {currentValue}</h2>
                    <p >{text}</p>
                </div>
            </div>
        </div>
    )
}

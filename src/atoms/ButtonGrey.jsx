import React from 'react'

export default function ButtonGrey({handleClick, text, icon}) {
  console.log(icon)
  return (
    <button 
    className='bg-button-grey  py-[18px] px-[40px] rounded-full flex justify-center items-center' 
    onClick={()=>{handleClick}}>
        <span>
            {text}
        </span> 
        {
          icon &&
          <span >
              {icon}
          </span>
        }
    </button>
  )
}

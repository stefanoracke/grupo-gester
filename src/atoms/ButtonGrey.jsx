import React from 'react'

export default function ButtonGrey({handleClick, text, icon ,type="button", disabled=false}) {
  return (
    <button 
    disabled={disabled}
    className='bg-button-grey  py-[18px] px-[40px] rounded-full flex justify-center items-center' 
    onClick={()=>{handleClick}}
    type={type}>
        <span>
            {text}
        </span> 
        {
          icon &&
          <span className='pl-2'>
              <img src={icon} alt="" />
          </span>
        }
    </button>
  )
}

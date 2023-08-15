import React from 'react'
import './ButtonGrey.css'

export default function ButtonGrey({onClick, text, icon ,type="button", disabled=false}) {
  return (
    <button 
    disabled={disabled}
    className='bg-button-grey  border border-primary hover:border-secondary duration-600 transition transition-all ease-in-out  py-[18px] px-[40px] rounded-full flex justify-center items-center' 
    onClick={onClick}
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
         <span class="btnBefore"></span>
    <span class="btnAfter"></span>
    </button>

  )
}

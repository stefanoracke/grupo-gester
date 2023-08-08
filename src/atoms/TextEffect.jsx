import React from 'react'
import './TextEffect.css'

export default function TextEffect({text, active, delay = '.6s'}) {
  return (
    <div className='overflow-hidden relative'>
    <span className=' opacity-0'>

        {text}
    </span>
    <span 
    style={{animationDelay: delay}}
    className={`transform left-0 animate-overflow absolute whitespace-nowrap translate-y-[100%] ${active ? 'animationTransformY' : ''}` }>

        {text}
    </span>
</div>
  )
}

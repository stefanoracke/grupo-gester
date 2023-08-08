import React from 'react'

export default function MainCards(
  {

  sizeIcon, 
  icon, 
  title, 
  description,
  cardSize
  }
  ) {
  return (
    <article 
    data-aos="zoom-in"
    data-aos-duration="2500"
    className={`w-full h-full ${cardSize == 'big' && 'pt-[60px]'} bg-card flex  flex-col items-center py-[30px] px-[15px]  rounded-[10px] `}
    >
        <div 
        style={{height:{sizeIcon},width:{sizeIcon}}}
        className={`flex justify-center items-center bg-white rounded-full p-3 mb-4`}>
            <img className='w-[60px] h-[60px]' src={icon} alt="" />
            
        </div>

        <h2 
        className={`text-md text-center ${cardSize == 'big' && 'pt-[20px]'}`}  
        style={{fontWeight:'bolder'}}>
            {title}
        </h2>

        <h2 
        className={`text-light text-center text-md ${cardSize == 'big' && 'pt-[20px] '}`}  
        style={{fontWeight:'400'}}>
            {description}
        </h2>

    </article>
  )
}

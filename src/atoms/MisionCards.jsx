import React, { useEffect, useState } from 'react'
import textureImg from './../assets/texture.png'
import  './MisionCards.css'

// Para usar este componente se necesita el MisionCards.css 
export default function MisionCards(
    {
        currentActive,
        index, 
        bgColor, 
        handleClick, 
        textColor,
        title, 
        text1,
        text2,
        icon,
        
    }
    ) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        if(currentActive == index){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    },[currentActive])

  return (
    <article
    onClick={()=>{handleClick(index)}}
    className={`h-[550px] bg-white text-black relative hover:cursor-pointer`}
    style={{
        width:`${isOpen ? '500px' : '70px'}`,
        transition:'1s ease-out all ', 
        borderRadius: `${isOpen ? '20px':'70px'}`,
        backgroundImage: `${ isOpen ? `url('${textureImg}'), ${bgColor}` : `url('${textureImg}')`}`,
        backgroundPosition: '0% 0%',
        backgroundSize: 'cover',
        backgroundRepeat: 'norepeat',
        backgroundColor: `${isOpen ? bgColor : '#fff'}`, 
        color:`${isOpen && !textColor? '#ffffff' : textColor ? textColor : '#0F206C'}`
    } }
    >
    

         {
            !isOpen ?
            <div className="flex gap-4 origin-left
              whitespace-nowrap  
             absolute bottom-0"
             style={{
                transform: 'translate(33px, -25px) rotate(-90deg)'
             }}>
                <div className="bg-texture-lb w-[25px] h-[25px] flex justify-center items-center  rounded-full text-white font-bolder">

                    <span className='transform text-[18px] -translate-y-[0.6px]'>
                        +
                    </span>
                </div>
                <span>
                    {title}
                </span>
            </div>
            :
            <>
            <div className="flex py-[100px] px-[60px] flex-col">
                <div className="flex items-center fadeIn delay-1">
                    <span className='bg-card w-[60px] h-[60px] rounded-full p-4 flex justify-center items-center' style={{background:`${textColor && 'linear-gradient(75deg,#030E28, #0F206C)'}`}}>
                        <img src={icon} alt="" />
                    </span>
                    <h2 className="text-3xl pl-6">{title}</h2>
                </div>
                <div className="pt-[40px] fadeIn delay-2" >
                    <p dangerouslySetInnerHTML={{ __html: text1 }}></p>
                </div>
                <div className="pt-[40px] fadeIn delay-3">
                <p dangerouslySetInnerHTML={{ __html: text2 }}></p>
                </div>

            </div>
            </>
}
    </article>
  )
}
 
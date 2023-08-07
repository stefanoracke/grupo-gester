import React, {useState, useEffect} from 'react'
import textureImg from './../assets/texture.png'

export default function MisionCardsMobile({card,currentActive,handleClick}) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        if(currentActive == card.index){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    },[currentActive])

  return (
    <article
    onClick={()=>{handleClick(card.index)}}
    className={`h-[60px] overflow-auto w-full bg-white text-black relative hover:cursor-pointer ${isOpen ? '' : 'flex items-center px-4'}`}
    style={{
        height:`${isOpen ? '500px' : '60px'}`,
        transition:'1s ease-out all ', 
        borderRadius: `${isOpen ? '20px':'60px'}`,
        backgroundImage: `${ isOpen ? `url('${textureImg}'), ${card.bgColor}` : `url('${textureImg}')`}`,
        backgroundPosition: '0% 0%',
        backgroundSize: 'cover',
        backgroundRepeat: 'norepeat',
        backgroundColor: `${isOpen ? card.bgColor : '#fff'}`, 
        color:`${isOpen && !card.textColor? '#ffffff' : card.textColor ? card.textColor : '#0F206C'}`
    } }
    >
    

         {
            !isOpen ?
            <div className="flex gap-4 flex-start items-center
              whitespace-nowrap"
            >
                <div className="bg-texture-lb w-[25px] h-[25px] 
                min-w-[25px] min-h-[25px]
                flex justify-center items-center  rounded-full text-white font-bolder">

                    <span className='transform -translate-y-[0.5px]'>
                        +
                    </span>
                </div>
                <span>
                    {card.title}
                </span>
            </div>
            :
            <>
            <div className="flex py-[40px] px-[25px]  flex-col">
                <div className="flex items-center fadeIn delay-1">
                    <span className='bg-card w-[56px] h-[56px] rounded-full p-4 flex justify-center items-center' style={{background:`${card.textColor && 'linear-gradient(75deg,#030E28, #0F206C)'}`}}>
                        <img src={card.icon} alt="" />
                    </span>
                    <h2 className="text-2xl pl-6">{card.title}</h2>
                </div>
                <div className="pt-[40px] fadeIn delay-2" >
                    <p className='font-light' dangerouslySetInnerHTML={{ __html: card.text1 }}></p>
                </div>
                <div className="pt-[40px] fadeIn delay-3">
                <p className='font-light' dangerouslySetInnerHTML={{ __html: card.text2 }}></p>
                </div>

            </div>
            </>
}
    </article>
  )
}

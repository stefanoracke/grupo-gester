import React from 'react'
import ButtonGrey from '../atoms/ButtonGrey'
import ArrowIcon from '../atoms/Icons/Arrow'

export default function OurWorksSection() {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <div className="py-[150px] flex flex-col items-center ">
      <h2 className="text-4xl text-secondary">Nuestra Obras</h2>
      <p className="max-w-[700px] text-center leading-[28px] text-[20px] pt-4">
      Realizamos más de 200 gestiones, entre 2021 y 2023, poniendo en primer lugar las inversiones de familias y empresas.
      </p>
      <div className='pt-[30px]'>

        <ButtonGrey
        icon={ArrowIcon}
        text={'Ver video'}
        handleClick={handleClick}
        />
      </div>
    </div>
  )
}

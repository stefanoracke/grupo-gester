import React from 'react'

export default function Triangle({size,  className}) {
  return (
    <span style={{width:{size}, height:{size}}}  className={'triangle ' + className}>

    </span>
  )
}

import React, { useEffect, useState } from 'react'
import './hamburger.css'

export default function Hamburger({active}) {
    useEffect(()=>{},active)
    console.log(active)
    return (
        <div class={`menu-btn-6 ${active ? 'active' : ''}`}>
            <span></span>
        </div>
    )
}

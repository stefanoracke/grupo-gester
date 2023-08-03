import { useState } from 'react'
import './App.css'

import LandingHome from './pages/LandingHome'

function App() {

  return (
    <>
      <main className=" w-full h-full bg-primary text-white min-h-[100vh] ">
        <div className='overflow-hidden flex flex-col items-center'>

          <LandingHome/>
        </div>
      </main>
    </>
  )
}

export default App

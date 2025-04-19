import React from 'react'
import Ripped from '../Components/Ripped'

const Error404 = () => {
  return (
    <div className='relative w-full h-screen bg-[url()] bg-center bg-no-repeat bg-cover'>
      <img src="https://www.airfarewatchdog.com/blog/wp-content/uploads/sites/26/2016/08/Lost-Traveling_HERO-1024x683.jpg" 
      className='w-full h-full object-cover ' />
      <h1 className='absolute top-64 text-shadow-2xs text-shadow-black left-[20%] font-[Paprika] text-8xl font-bold text-white z-10'>404: Page Not Found</h1>
      <Ripped className={''}/>
    </div>
  )
}

export default Error404

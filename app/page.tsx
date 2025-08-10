import React from 'react'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
const page = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl flex items-center mx-auto w-full  px-4'>
        <div className='h-[80vh]'>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default page

import React from 'react'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
const page = () => {
  return (
    <div>
      <Navbar />
      <div className=' flex items-center mx-auto justify-center w-full '>
        <div className='h-[88vh] mx-auto flex items-center flex-col bg-gradient-to-b w-full from-white to to-[#0036a1] from-30%'>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default page

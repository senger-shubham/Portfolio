import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[100%] h-[80px] fixed text-white bg-black/70 flex items-center  '>
      <div className='w-[50%]'>
        <h1 className=' flex items-center pl-50 p-4 text-3xl'>Portfolio</h1>
      </div>
      <div className='w-[50%]'>
        <div className='flex gap-10 text-xl'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import image from "../assets/image.webp";

const Home = () => {
  return (
    <section id='home'>
    <div className='h-[850px] w-[100%] pt-[250px] bg-amber-500 text-white' style={{ backgroundImage:`url(${image})` , backgroundSize: "cover", backgroundPosition: "center"}}>
    <div className='w-[50%] flex flex-col items-start pl-[200px] gap-6  text-3xl'>
      <div><p>Hello Its's Me</p></div>
      <div className='font-extrabold text-5xl'><p>Shubham Singh </p></div>
      <div className='font-bold'><p>I am Full a <span className='text-red-700'>Stack Devloper</span> </p></div>
      <div className='bg-red-700 rounded p-3' >

       <a href="#Hire me">Hire me</a>
       </div>
    </div>
    </div>
    </section>
  )
}

export default Home

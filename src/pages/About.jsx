import React from 'react'
import myphoto from "../assets/my_photo.jpg";

function About() {
  return (
    <div className='w-[100%]  h-[800px] '>

      <div className='h-[150px] flex justify-center items-center flex-col'>
        <h1 className='pt-[200px] font-bold text-5xl'>About me</h1>
        <h4 className='font-bold'> <span>-</span> <span className='text-red-600 text-2xl'>who i am </span><span>-</span></h4>
      </div>

      <div className='flex justify-center items-center h-[700px]'>
        <div className='w-[50%]'>
          <div className='flex justify-center items-center'><img src={myphoto} alt="profile" className="w-84 h-100 object-cover rounded border-2 shadow-lg" /></div>
        </div>
        <div className='w-[50%] flex  flex-col '>
          <div className=' text-2xl font-bold'>
            <h1>I am Shubham Singh</h1>
            <h3>I am a <span className='text-red-700'>Full Stack Devloper </span></h3>
          </div>

          <div>
            <p>
             I am an immensely dedicated full stack developer, known for building captivating end-to-end digital solutions. With an innate ability to write clean, efficient code, I've seamlessly integrated dynamic backends with user-friendly interfaces, garnering praise for their scalability and functionality. As a relentless problem solver, I've conquered over 100 DSA challenges on LeetCode, achieving an impressive rank of 339 in a Coding Ninjas competition. My commitment to excellence is matched only by my passion for innovation and precision.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Card from './components/Card'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
     <div className=" h-screen ">
      <Card />
    </div>
    </>
  )
}

export default App

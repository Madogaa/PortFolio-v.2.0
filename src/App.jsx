import React from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import SiteEntry from './Sections/SiteEntry/SiteEntry'
import TempLine from './Sections/TempLine/TempLine'
import CloudSphere from './Sections/CloudSphere/CloudSphere'
import Projects from './Sections/Projects/Projects'

function App() {

  return (
    <>
      <NavBar />
      <div className="container mb-20">
        <SiteEntry />
      </div>
      <TempLine />
      <div className="container flex w-screen min-h-screen">
        <Projects />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-screen h-screen">
        <div className="flex flex-col">
        <h2 className='text-7xl sm:text-8xl md:text-9xl lg:text-7xl xl:text-8xl boujee-text'> Hard Skills</h2>
        <p className='text-right text-lg font-semibold'>Drag to see more</p>
        </div>
        <CloudSphere />
      </div>

    </>
  )
}

export default App

import React from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import SiteEntry from './Sections/SiteEntry/SiteEntry'
import TempLine from './Sections/TempLine/TempLine'
import CloudSphere from './Sections/CloudSphere/CloudSphere'
import Projects from './Sections/Projects/Projects'
import Contact from './Sections/Contact/Contact'
import Divider from './Styling/Divider'

function App() {

  return (
    <>
      <NavBar />
      <div id='entry' className="container mb-20">
        <SiteEntry />
      </div>

      <TempLine  />

      <div id="projects" className="container flex w-full min-h-screen">
        <Projects />
      </div>

      <div id='tech' className="flex flex-col lg:flex-row justify-center items-center w-full h-screen">
        <div className="flex flex-col">
        <h2 className='text-7xl sm:text-8xl md:text-9xl lg:text-7xl xl:text-8xl boujee-text'> Hard Skills</h2>
        <p className='text-right text-lg font-semibold'>Drag to see more</p>
        </div>
        <CloudSphere />
      </div>
      <Divider />

      <Contact />
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import SiteEntry from './Sections/SiteEntry/SiteEntry'
import TempLine from './Sections/TempLine/TempLine'

function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <SiteEntry />
      </div>
      <TempLine />

    </>
  )
}

export default App

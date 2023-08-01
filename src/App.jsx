import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllPlayers from './Components/AllPlayers'
import SinglePlayer from './Components/SinglePlayer'
import { Route, Routes, Link } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/singleplayer'>Single Player</Link>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/singleplayer" element={<SinglePlayer />} />
        </Routes>
      </div >
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Freelance from './components/Freelance'
import Popular from './components/Popular'
import Workmanship from './components/Workmanship'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Freelance/>
      <Popular/>
      <Workmanship/>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Freelance from './components/Freelance'
import Popular from './components/Popular'
import Workmanship from './components/Workmanship'
import Choose from './components/Choose'
import { features } from './data/features'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Freelance/>
      <Popular/>
      <Workmanship/>
      <Choose features={features}/>
    </div>
  )
}

export default App

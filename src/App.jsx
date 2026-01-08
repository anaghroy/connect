import React from 'react'
import Navbar from './components/Navbar'
import Freelance from './components/Freelance'
import Popular from './components/Popular'
import Workmanship from './components/Workmanship'
import Choose from './components/Choose'
import { features } from './data/features'
import Experienced from './components/Experienced'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Freelance/>
      <Popular/>
      <Workmanship/>
      <Choose features={features}/>
      <Experienced/>
      <Footer/>
    </div>
  )
}

export default App

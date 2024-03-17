import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div className='mx-20'>
      <Navbar/>
      <Banner/>
      <Recipes/>
    </div>
  )
}

export default App

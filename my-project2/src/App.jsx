import { useState } from 'react'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import './App.css'

function App() {
  

  return (
    <div className="App">
     
 
      <Navbar />
    <Hero />
    <Card 
    img ="./src/assets/kahve.png"
    rating = "5.0"
    reviewCount= "6"
     country = "USA"
     title = "Life Lessons with Katie Zaferes"
    price = "136"
    />
    <Card />
    <Card />
      <Main />
      
    </div>
  )
}

export default App

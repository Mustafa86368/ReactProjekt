import { useState } from 'react'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'
import './App.css'

function App() {
  const cardElements = data.map(element => {
    return <Card img = {data.coverImg} 
    rating = {data.stats.rating}
    reviewCount = {data.stats.reviewCount}
    location = {data.location}
    title = {data.title}
    price = {data.price} 
    open Spots = {data.openSpots}
   

    />
  })

  return (
    <div className="App">
     
 
      <Navbar />
    <Hero />
   {cardElements}


      <Main />
      
    </div>
  )
}

export default App

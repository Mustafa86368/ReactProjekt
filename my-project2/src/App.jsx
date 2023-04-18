import { useState } from 'react'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'
import './App.css'

console.log(data)
function App() {
  const cards = data.map(item=> {
    return <Card img = {item.coverImg} 
    rating = {item.stats.rating}
    reviewCount = {item.stats.reviewCount}
    location = {item.location}
    title = {item.title}
    price = {item.price} 
    open Spots = {item.openSpots}
   

    />
  })

  return (
    <div className="App">
     
 
      <Navbar />
    <Hero />
   {cards}


      <Main />
      
    </div>
  )
}

export default App

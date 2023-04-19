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
    return (
    <Card
    key = {item.id} 
    item = {item}

    />
    )
  })

  return (
    <div className="App">
     
 
    <Navbar />
    <Hero />
    <section className='card--list'>
    {cards}
    </section>
 


      <Main />
      
    </div>
  )
}

export default App

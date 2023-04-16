import { useState } from 'react'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
 
      <Navbar />
    <Hero />
      <Main />
      
    </div>
  )
}

export default App

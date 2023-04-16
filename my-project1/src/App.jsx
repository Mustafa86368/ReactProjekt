import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Mainn } from './components/Mainn'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
 <Navbar />
  <Mainn />
    
    </div>
  )
}

export default App

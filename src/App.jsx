import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar />
     <home />
     <items />
     <Cart />

    </>
  )
}

export default App

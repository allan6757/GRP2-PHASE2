import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <div>
      <Home />
      <Items />
      <Navbar/>
      <Newsletter/>
      {/* <Cart/> */}
      <Footer/>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'; // Import useState
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import AddSneaker from './components/AddSneaker';
import SneakerDetails from './components/SneakerDetails';
import { CartProvider } from './context/CartContext';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  return (
    <CartProvider>
      {/* Pass searchQuery and setSearchQuery to Navbar */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<><Home /><Newsletter /></>} />
        {/* Pass searchQuery to Items */}
        <Route path="/items" element={<Items searchQuery={searchQuery} />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-sneaker" element={<AddSneaker />} />
        <Route path="/sneakers/:id" element={<SneakerDetails />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
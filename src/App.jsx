import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import AddSneaker from './components/AddSneaker';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Items /><Newsletter /></>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-sneaker" element={<AddSneaker />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import AddSneaker from './components/AddSneaker';
import SneakerDetails from './components/SneakerDetails'; // Import the new component
import { CartProvider } from './context/CartContext';
import About from './components/About';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Newsletter /></>} />
        <Route path="/items" element={<Items />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-sneaker" element={<AddSneaker />} />
        {/* New: Route for Sneaker Details */}
        <Route path="/sneakers/:id" element={<SneakerDetails />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
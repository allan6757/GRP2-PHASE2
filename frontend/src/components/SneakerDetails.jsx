import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../App.css'; // Assuming you'll add specific styles for this component here

const API_BASE_URL = "http://localhost:3000/product";

function SneakerDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [sneaker, setSneaker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Sneaker not found (Status: ${res.status})`);
        }
        return res.json();
      })
      .then(data => {
        setSneaker(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch sneaker details:", err);
        setError("Could not load sneaker details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="details-container">Loading sneaker details...</div>;
  }

  if (error) {
    return <div className="details-container error-message">{error}</div>;
  }

  if (!sneaker) {
    return <div className="details-container">Sneaker not found.</div>;
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate('/items')} className="back-button">
        &larr; Back to Products
      </button>
      <div className="sneaker-detail-card">
        <img src={sneaker.image} alt={sneaker.name} className="detail-image" />
        <div className="detail-info">
          <h2>{sneaker.name}</h2>
          <p><strong>Price:</strong> KES {sneaker.Price}</p>
          <p><strong>Stock:</strong> {sneaker.Stock}</p>
          {/* Add more details here if your product data has them */}
          <button onClick={() => addToCart(sneaker)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SneakerDetails;
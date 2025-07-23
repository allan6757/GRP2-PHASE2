import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";

const API_BASE_URL = "https://grp2-phase2.onrender.com/product";

// Items now receives searchQuery as a prop
function Items({ searchQuery }) {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setSneakers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sneakers:", err);
        setError("Failed to load sneakers. Please try again later.");
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once on mount

  // Filter sneakers based on searchQuery
  const filteredSneakers = sneakers.filter(sneaker =>
    sneaker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="items-container">Loading sneakers...</div>;
  }

  if (error) {
    return <div className="items-container error-message">{error}</div>;
  }

  return (
    <div className="items-container">
      <h2>Kick it with these Sneakers!</h2>
      {filteredSneakers.length === 0 && searchQuery !== '' ? (
        <p className="no-results-message">No sneakers found matching "{searchQuery}".</p>
      ) : filteredSneakers.length === 0 && searchQuery === '' ? (
        <p className="no-results-message">No sneakers available.</p>
      ) : (
        <div className="items-grid">
          {filteredSneakers.map((sneaker) => (
            <div className="sneaker-card" key={sneaker.id}>
              <img src={sneaker.image} alt={sneaker.name} />
              <h3>{sneaker.name}</h3>
              <p>Price: KES {sneaker.Price}</p>
              <button onClick={() => addToCart(sneaker)}>Add to Cart</button>
              <Link to={`/sneakers/${sneaker.id}`} className="view-details-link">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Items;
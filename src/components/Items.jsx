import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";

const API_BASE_URL = "http://localhost:3000/product";

function Items() {
  const [sneakers, setSneakers] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => res.json())
      .then((data) => setSneakers(data))
      .catch(() => console.error("Failed to fetch sneakers"));
  }, []);

  return (
    <div className="items-container">
      <h2>Kick it with these Sneakers!</h2>
      <div className="items-grid">
        {sneakers.map((sneaker) => (
          <div className="sneaker-card" key={sneaker.id}>
            <img src={sneaker.image} alt={sneaker.name} />
            <h3>{sneaker.name}</h3>
            <p>Price: KES {sneaker.Price}</p>
            <button onClick={() => addToCart(sneaker)}>Add to Cart</button>
            <Link to={`/sneakers/${sneaker.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
    
}

export default Items;

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../App.css";

// The base URL for your API
const API_BASE_URL = "http://localhost:3000/product";

function Items() {
    const [sneakers, setSneakers] = useState([]);

    // Fetch sneaker data from the API when component mounts
    useEffect(() => {
        fetch(`${API_BASE_URL}`)
            .then((res) => res.json())
            .then((data) => setSneakers(data))
            .catch((error) => console.error("Oops! Something went wrong while fetching the sneakers. Refresh the page to try again."));
    }, []);

    return (
        <div className="items-container">
            <h2>Kick it with these Sneakers!</h2>
            <div className="items-grid">
                {sneakers.map((sneaker) => (
                    <div className="sneaker-card" key={sneaker.id}>
                        <img src={sneaker.image} alt={sneaker.name} />
                        <h3>{sneaker.name}</h3>
                        <p>Name: {sneaker.name}</p>
                        <p>Price: KES {sneaker.Price}</p>
                        <Link to={`/sneakers/${sneaker.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Items;

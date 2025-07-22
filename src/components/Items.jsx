import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "../App.css";
import { useCart } from "../context/CartContext";

const API_BASE_URL = "http://localhost:3000/product";

function Items() {
  const [allSneakers, setAllSneakers] = useState([]); // Store all fetched sneakers
  const [filteredSneakers, setFilteredSneakers] = useState([]); // Store filtered sneakers for display
  const { addToCart } = useCart();
  const location = useLocation(); // Hook to access the URL's location object

  // Effect to fetch all sneakers initially
  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setAllSneakers(data); // Store all fetched data
      })
      .catch((error) => console.error("Failed to fetch sneakers:", error));
  }, []); // Empty dependency array means this runs once on mount

  // Effect to filter sneakers whenever allSneakers or the search query changes
  useEffect(() => {
    // Get the search term from the URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search'); // 'search' is the parameter name from Navbar

    if (searchTerm) {
      // Filter sneakers based on the search term (case-insensitive)
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const newFilteredSneakers = allSneakers.filter(sneaker =>
        sneaker.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        (sneaker.brand && sneaker.brand.toLowerCase().includes(lowerCaseSearchTerm)) // Assuming sneakers might have a 'brand' property
        // Add more properties to search if needed, e.g., sneaker.description
      );
      setFilteredSneakers(newFilteredSneakers);
    } else {
      // If no search term, display all sneakers
      setFilteredSneakers(allSneakers);
    }
  }, [allSneakers, location.search]); // Re-run when allSneakers or URL search query changes

  return (
    <div className="items-container">
      <h2>Kick it with these Sneakers!</h2>
      {filteredSneakers.length === 0 && (
        <p className="text-center text-gray-600">No sneakers found matching your search. Try a different term!</p>
      )}
      <div className="items-grid">
        {filteredSneakers.map((sneaker) => (
          <div className="sneaker-card" key={sneaker.id}>
            <img src={sneaker.image} alt={sneaker.name} className="sneaker-image-thumbnail" />
            <h3>{sneaker.name}</h3>
            <p>Price: KES {sneaker.Price}</p>
            <button
              onClick={() => addToCart(sneaker)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
            <Link to={`/sneakers/${sneaker.id}`} className="view-details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;


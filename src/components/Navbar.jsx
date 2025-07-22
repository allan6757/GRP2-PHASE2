import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css";

function Navbar() {
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input value
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Handler for when the search input changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Handler for when the search button is clicked or Enter is pressed
    const handleSearchSubmit = () => {
        if (searchTerm.trim()) { // Only navigate if there's a non-empty search term
            // Navigate to the products page with the search term as a query parameter
            navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm(""); // Clear the search bar after submission
        }
    };

    // Handler for key presses in the search input
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit();
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">SneakerStore</Link>
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                {/* Changed Products link to potentially use the search functionality later */}
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/add-sneaker">Add Sneaker</Link></li>
            </ul>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search sneakers..."
                    value={searchTerm} // Bind input value to state
                    onChange={handleSearchChange} // Handle input changes
                    onKeyPress={handleKeyPress} // Handle Enter key press
                />
                <button onClick={handleSearchSubmit}>Search</button> {/* Handle button click */}
            </div>
        </nav>
    );
}

export default Navbar;

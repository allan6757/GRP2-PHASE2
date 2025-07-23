import React, { useState } from "react"; // useState is no longer needed here, but keeping for reference if future local state is added
import { Link } from "react-router-dom";
import "../App.css";

// Navbar now receives searchQuery and setSearchQuery from App.jsx
function Navbar({ searchQuery, setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    // In this setup, the search happens dynamically as you type in Items.jsx.
    // If you wanted an explicit "Search" button to trigger, you'd move filtering logic here
    // or set a "trigger" state. For now, it's just for user clarity/consistency.
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SneakerStore</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/home"></Link></li>
        <li><Link to="/items">Products</Link></li>
        <li><Link to="/about">About</Link></li> {/* Assuming you'll create an About page later */}
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/add-sneaker">Add Sneaker</Link></li>
      </ul>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search sneakers..."
          value={searchQuery} // Controlled input
          onChange={handleSearchChange} // Update search query on change
        />
        <button onClick={handleSearchClick}>Search</button> {/* Optional: for visual click feedback */}
      </div>
    </nav>
  );
}

export default Navbar;
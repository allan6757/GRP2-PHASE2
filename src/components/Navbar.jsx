import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SneakerStore</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/items">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/add-sneaker">Add Sneaker</Link></li>
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="Search sneakers..." />
        <button>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
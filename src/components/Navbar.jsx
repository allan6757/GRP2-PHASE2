// components/NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Functional component for navigation bar
function Navbar() {
    return (
        <>
            {/* React fragment wraps everything without adding extra DOM element */}
            <nav className="navbar">
                {/* Logo section that links to Home */}
                <div className="logo">
                    <Link to="/">SneakerStore</Link>
                </div>

                {/* Navigation menu */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Items">Products</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
                </ul>
                {/* Search bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search sneakers..." />
                    <button>Search</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;